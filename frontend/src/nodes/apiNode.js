// src/nodes/apiNode.jsx
import { BaseNode } from "./BaseNode";
import { useState } from "react";
import { useStore } from "../store";

export const APINode = ({ id }) => {
  const [url, setUrl] = useState("https://api.example.com");
  const updateField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      label="API Call"
      color="#EA580C"
      inputs={[{ id: "trigger" }]}
      outputs={[{ id: "response" }]}
    >
      <input
        type="text"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
          updateField(id, "url", e.target.value);
        }}
        placeholder="API URL"
        style={{ width: "100%", padding: "6px", borderRadius: "6px" }}
      />
    </BaseNode>
  );
};
