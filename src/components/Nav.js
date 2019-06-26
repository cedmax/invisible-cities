import React from "react";

export default ({ sections, api, isVisible }) => (
  <nav style={{ opacity: isVisible ? 0.9 : 0 }}>
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
