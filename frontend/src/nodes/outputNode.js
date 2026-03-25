// src/nodes/outputNode.jsx
import { BaseNode } from "./BaseNode";
import { useState } from "react";
import { useStore } from "../store";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || `output_${id.split("-")[1]}`,
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");
  const updateField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      label="Output"
      color="#B91C1C"
      width={230}
      minHeight={110}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label>
          Name:
          <input
            type="text"
            value={currName}
            onChange={(e) => {
              setCurrName(e.target.value);
              updateField(id, "outputName", e.target.value);
            }}
            style={{ marginLeft: "8px", width: "120px" }}
          />
        </label>

        <label>
          Type:
          <select
            value={outputType}
            onChange={(e) => {
              setOutputType(e.target.value);
              updateField(id, "outputType", e.target.value);
            }}
            style={{ marginLeft: "8px" }}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
