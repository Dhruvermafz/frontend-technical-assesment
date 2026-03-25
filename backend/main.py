from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import networkx as nx
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI(title="VectorShift Pipeline Parser")

# Allow frontend (React) to call the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],           # In production, restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Optional: Define a model for better validation (recommended)
class Pipeline(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
async def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build a directed graph to check if it's a DAG
    G = nx.DiGraph()

    # Add nodes
    for node in nodes:
        G.add_node(node["id"])

    # Add edges
    for edge in edges:
        G.add_edge(edge["source"], edge["target"])

    # Check if it's a Directed Acyclic Graph
    is_dag = nx.is_directed_acyclic_graph(G)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }