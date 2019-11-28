import React from "react";

export default ({ showHack }) =>
  showHack && (
    <p
      style={{
        textAlign: "center",
        position: "absolute",
        bottom: 0,
        transform: "translate3d(-50%, 130%, 0)",
        left: "50%"
      }}
    >
      <a
        href="http://mgfoundation.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          height={50}
          src="/mazzini.jpg"
          alt="Logo of The Mazzini and Garibaldi Foundation"
        />
      </a>{" "}
      <a
        href="http://golsoncott.org.uk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          height={50}
          src="/golsoncott.jpg"
          alt="Logo of The Golsoncott Foundation"
        />
      </a>
      <br />
      supported by The Mazzini and Garibaldi Foundation and The Golsoncott
      Foundation
    </p>
  );
