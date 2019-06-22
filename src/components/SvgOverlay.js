import React from "react";
import athens from "../images/athens.svg";
import wroclaw from "../images/wroclaw.svg";
import venice from "../images/venice.svg";

const backgrounds = { athens, wroclaw, venice };

export default ({ name, children }) => (
  <div
    style={{
      "--background": `url('${backgrounds[name]}')`,
    }}
    className="section component"
  >
    {children}
  </div>
);
