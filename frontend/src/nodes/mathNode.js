// src/nodes/mathNode.jsx
import { BaseNode } from "./BaseNode";
import { useState } from "react";
import { useStore } from "../store";

export const MathNode = ({ id }) => {
  const [operation, setOperation] = useState("+");
  const updateField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      label="Math"
      color="#7C3AED"
      inputs={[{ id: "a" }, { id: "b" }]}
      outputs={[{ id: "result" }]}
      width={200}
    >
      <select
        value={operation}
        onChange={(e) => {
          setOperation(e.target.value);
          updateField(id, "operation", e.target.value);
        }}
        style={{ width: "100%", padding: "6px", borderRadius: "6px" }}
      >
        <option value="+">Add (+)</option>
        <option value="-">Subtract (-)</option>
        <option value="*">Multiply (×)</option>
        <option value="/">Divide (/)</option>
      </select>
    </BaseNode>
  );
};
