// src/nodes/textNode.jsx
import { BaseNode } from "./BaseNode";
import { useState, useEffect, useRef } from "react";
import { useStore } from "../store";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || "Hello {{name}}, how are you?",
  );
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);
  const updateField = useStore((state) => state.updateNodeField);

  // Extract variables like {{variable_name}}
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\}\}/g;
    const matches = [...currText.matchAll(regex)].map((match) => match[1]);
    const uniqueVars = [...new Set(matches)];

    setVariables(uniqueVars);
    updateField(id, "text", currText);
    updateField(id, "variables", uniqueVars);
  }, [currText, id, updateField]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 10}px`;
    }
  }, [currText]);

  return (
    <BaseNode
      id={id}
      label="Text"
      color="#15803D"
      width={280}
      minHeight={90 + variables.length * 32}
    >
      <textarea
        ref={textareaRef}
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        placeholder="Enter text. Use {{variable}} for inputs"
        style={{
          width: "100%",
          minHeight: "70px",
          backgroundColor: "#0F172A",
          color: "#fff",
          border: "1px solid #334155",
          borderRadius: "8px",
          padding: "10px",
          fontSize: "14px",
          resize: "none",
          outline: "none",
        }}
      />

      {variables.length > 0 && (
        <div style={{ marginTop: "8px", fontSize: "12px", opacity: 0.8 }}>
          Variables: <strong>{variables.join(", ")}</strong>
        </div>
      )}
    </BaseNode>
  );
};
