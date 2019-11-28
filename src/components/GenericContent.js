import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import ShamefulHack from "./ShamefulHack";

export default ({ block }) =>
  block.map(({ content, title }) => (
    <section key={title} className="slide">
      <div className="padder">
        <BlockContent blocks={content} />
        <ShamefulHack showHack={title === "Next"} />
      </div>
    </section>
  ));
