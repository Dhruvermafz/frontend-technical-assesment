// src/nodes/emailNode.jsx
import { BaseNode } from "./BaseNode";

export const EmailNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      label="Send Email"
      color="#DB2777"
      inputs={[{ id: "to" }, { id: "subject" }, { id: "body" }]}
      width={240}
    >
      <div style={{ textAlign: "center", opacity: 0.9 }}>📧 Send Email</div>
    </BaseNode>
  );
};
