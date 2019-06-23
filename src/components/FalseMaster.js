import React from "react";

export default ({ currentBackground, logoVisible, backgrounds }) => (
  <div
    className="false-master"
    style={{
      backgroundImage: `url(${`/images/${
        backgrounds[currentBackground]
      }.jpg`})`,
    }}
  >
    <h1 style={{ opacity: logoVisible ? 0.9 : 0 }}>
      <span>the</span>Invisible Cities<span>project</span>
    </h1>
  </div>
);
