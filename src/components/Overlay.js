import React from "react";

const backgrounds = {
  athens: "rgba(0, 123, 167, .7)",
  wroclaw: "rgba(0, 128, 0, .7)",
  venice: "rgba(232, 41, 155, .7)",
};

export default ({ name, children, title }) => (
  <section
    className="content section fp-auto-height-responsive"
    style={{
      background: backgrounds[name],
    }}
  >
    <h2>{title}</h2>
    {children}
  </section>
);
