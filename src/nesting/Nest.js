import React, { useState } from "react";
import "./nest.css";

function Nest({ node }) {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="list-box">
      
      <li>
        <div onClick={handleToggle} style={{ cursor: "pointer" }}>
          {node.name}
        </div>
        {expanded && node.children && (
          <ul>
            {node.children.map((child) => (
              <Nest key={child.id} node={child} />
            ))}
          </ul>
        )}
        {expanded && node.grandchildren && (
          <ul>
            {node.grandchildren.map((grandchild) => (
              <li key={grandchild.id}>{grandchild.name}</li>
            ))}
          </ul>
        )}
      </li>
    </div>
  );
}

export default Nest;
