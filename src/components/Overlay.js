import React from "react";

const backgrounds = {
  athens: "#0054A6",
  wroclaw: "#04fccc",
  venice: "#E8299B",
  london: "#196E36",
};

export default ({ name }) => (
  <div
    style={{
      background: backgrounds[name],
      opacity: 0.7,
      width: "100%",
      height: "100%",
    }}
  />
);
