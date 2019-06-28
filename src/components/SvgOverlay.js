import React from "react";

export default ({ name, isVisible, children }) => (
  <div
    style={{
      "--background-position": isVisible ? "center 0" : "center 200vh",
      "--background": `url('/images/${name}.svg')`,
    }}
    className="section component"
  >
    {children}
  </div>
);
