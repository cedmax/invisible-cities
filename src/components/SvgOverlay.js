import React from "react";
import athens from "../images/athens.svg";
import wroclaw from "../images/wroclaw.svg";
import venice from "../images/venice.svg";
import london from "../images/london.svg";

const backgrounds = { athens, wroclaw, venice, london };

export default ({ name }) => (
  <div
    style={{
      backgroundImage: `url('${backgrounds[name]}')`,
      opacity: 0.7,
    }}
    className="component"
  />
);
