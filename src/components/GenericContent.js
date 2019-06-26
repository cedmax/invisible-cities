import React from "react";
import BlockContent from '@sanity/block-content-to-react'

export default ({block}) => block.map((({content, title}) => (
  <section key={title} className="slide">
    <div className="padder">
      <BlockContent blocks={content} />
    </div>
  </section>
)))
