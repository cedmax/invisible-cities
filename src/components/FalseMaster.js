import React from "react";

export default ({ currentBackground, logoVisible, backgrounds }) =>
  backgrounds.map((background, i) => (
    <div
      key={background}
      className="false-master"
      style={{
        opacity: currentBackground === i ? 1 : 0,
        backgroundImage: `url(${`/images/${background}.jpg`})`,
      }}
    >
      <h1 style={{ opacity: logoVisible ? 0.9 : 0 }}>
        <span>the</span>Invisible Cities<span>project</span>
      </h1>
    </div>
  ));
