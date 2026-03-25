// src/nodes/conditionNode.jsx
import { BaseNode } from "./BaseNode";

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      label="Condition"
      color="#B45309"
      inputs={[{ id: "input" }]}
      outputs={[{ id: "true" }, { id: "false" }]}
      width={220}
    >
      <div style={{ textAlign: "center", fontSize: "13px" }}>
        If condition is true → True
        <br />
        Else → False
      </div>
    </BaseNode>
  );
};
