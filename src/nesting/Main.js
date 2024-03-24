import React, { useState } from "react";
import data from "./data.js";
import Nest from "./Nest.js";

function Main() {
  return (
    <div>
      <h3>NESTING COMPONENT</h3>
      <ul>
        {data.map((node) => (
          <Nest key={node.id} node={node} />
        ))}
      </ul>
    </div>
  );
}

export default Main;
