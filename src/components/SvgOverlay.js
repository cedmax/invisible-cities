import React from "react";

export default ({ name, children }) => (
  <div
    style={{
      "--background": `url('/images/${name}.svg')`,
    }}
    className="section component"
  >
    {children}
  </div>
);
