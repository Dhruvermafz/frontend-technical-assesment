// src/nodes/llmNode.jsx
import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      label="LLM"
      color="#7C3AED"
      width={230}
      minHeight={110}
      inputs={[{ id: "system" }, { id: "prompt" }]}
      outputs={[{ id: "response" }]}
    >
      <div style={{ textAlign: "center", fontSize: "14px", opacity: 0.9 }}>
        Large Language Model
      </div>
    </BaseNode>
  );
};
