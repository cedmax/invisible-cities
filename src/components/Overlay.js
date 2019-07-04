import React from "react";

const backgrounds = {
  athens: "rgb(0, 150, 152, .7)",
  wroclaw: "rgba(0, 128, 0, .7)",
  venice: "rgba(232, 41, 155, .7)",
  edinburgh: "rgba(253, 190, 2, .7)",
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
