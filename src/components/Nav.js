import React from "react";
export default ({ sections, api }) => (
  <nav>
    {sections.map((section, i) => (
      <a
        key={section}
        onClick={() => api.moveTo(i + 2)}
        href={`#${section.toLowerCase()}`}
      >
        {section}
      </a>
    ))}
  </nav>
);
