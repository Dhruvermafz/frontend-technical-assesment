// src/nodes/filterNode.jsx
import { BaseNode } from "./BaseNode";

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      label="Filter"
      color="#0F766E"
      inputs={[{ id: "data" }]}
      outputs={[{ id: "filtered" }]}
    >
      <div style={{ textAlign: "center", fontSize: "13px" }}>
        Filter data based on condition
      </div>
    </BaseNode>
  );
};
