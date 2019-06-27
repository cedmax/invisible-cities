import React from "react";
import Nav from "./Nav";

export default ({
  titles,
  menuVisible,
  currentBackground,
  cityOver,
  logoVisible,
  backgrounds,
}) => (
  <>
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

    <div
      className="true-master"
      style={{
        pointerEvent: "none",
        opacity: cityOver ? 1 : 0,
        position: "fixed",
        "--mask-image": `url(${`/images/${
          backgrounds[currentBackground]
        }.svg`})`,
        backgroundImage: `url(${`/images/${
          backgrounds[currentBackground]
        }.jpg`})`,
      }}
    >
      <Nav sections={titles} isVisible={menuVisible} />
    </div>
  </>
);
