// src/nodes/inputNode.jsx
import { BaseNode } from "./BaseNode";
import { useState } from "react";
import { useStore } from "../store";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || `input_${id.split("-")[1]}`,
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");
  const updateField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode id={id} label="Input" color="#1E40AF" width={230} minHeight={110}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label>
          Name:
          <input
            type="text"
            value={currName}
            onChange={(e) => {
              setCurrName(e.target.value);
              updateField(id, "inputName", e.target.value);
            }}
            style={{ marginLeft: "8px", width: "120px" }}
          />
        </label>

        <label>
          Type:
          <select
            value={inputType}
            onChange={(e) => {
              setInputType(e.target.value);
              updateField(id, "inputType", e.target.value);
            }}
            style={{ marginLeft: "8px" }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
