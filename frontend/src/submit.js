// src/submit.js
import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    if (nodes.length === 0) {
      alert("Please add at least one node to the pipeline");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error("Failed to connect to backend");
      }

      const result = await response.json();

      // Nice user-friendly alert
      const message = `
Pipeline Analysis Result:

✅ Nodes     : ${result.num_nodes}
✅ Edges     : ${result.num_edges}
${result.is_dag ? "✅ Valid DAG (No Cycles)" : "❌ Not a DAG (Contains Cycle!)"}
      `.trim();

      alert(message);
    } catch (error) {
      console.error(error);
      alert(
        "❌ Error connecting to backend.\nMake sure backend is running on http://127.0.0.1:8000",
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px 0",
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          padding: "14px 32px",
          fontSize: "16px",
          fontWeight: "600",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
        }}
      >
        Submit Pipeline
      </button>
    </div>
  );
};
