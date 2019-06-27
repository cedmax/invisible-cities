import React from "react";

export default ({ sections, isVisible }) => (
  <nav style={{ opacity: isVisible ? 0.9 : 0 }}>
    {sections.map(section => (
      <a key={section} href={`#${section.toLowerCase()}`}>
        {section}
      </a>
    ))}
  </nav>
);
