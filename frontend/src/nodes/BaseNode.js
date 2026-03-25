// src/nodes/BaseNode.jsx
import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  label,
  children,
  inputs = [],
  outputs = [],
  color = "#1E2937",
  width = 240,
  minHeight = 100,
}) => {
  return (
    <div
      style={{
        width: width,
        minHeight: minHeight,
        backgroundColor: color,
        border: "2px solid #475569",
        borderRadius: "12px",
        padding: "14px",
        color: "#fff",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)",
        position: "relative",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Node Header */}
      <div
        style={{
          textAlign: "center",
          fontWeight: "600",
          marginBottom: "12px",
          fontSize: "15px",
          borderBottom: "1px solid #334155",
          paddingBottom: "8px",
        }}
      >
        {label}
      </div>

      {/* Content */}
      <div style={{ marginBottom: "10px" }}>{children}</div>

      {/* Input Handles (Left Side) */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{
            top: `${45 + index * 28}px`,
            backgroundColor: "#eab308",
            border: "2px solid white",
            width: "12px",
            height: "12px",
          }}
        />
      ))}

      {/* Output Handles (Right Side) */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{
            top: `${45 + index * 28}px`,
            backgroundColor: "#22c55e",
            border: "2px solid white",
            width: "12px",
            height: "12px",
          }}
        />
      ))}
    </div>
  );
};
