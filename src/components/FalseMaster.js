import React from "react";
import athens from "../images/athens.jpg";
import wroclaw from "../images/wroclaw.jpg";
import venice from "../images/venice.jpg";
import london from "../images/london.jpg";

const backgrounds = [athens, wroclaw, venice, london];

export default ({ currentBackground, logoVisible }) => (
  <div
    className="false-master"
    style={{
      backgroundImage: `url(${backgrounds[currentBackground]})`,
    }}
  >
    <h1 style={{ opacity: logoVisible ? 0.8 : 0 }}>
      <span>the</span>Invisible Cities<span>project</span>
    </h1>
  </div>
);
