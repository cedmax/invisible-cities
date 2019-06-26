import React from "react";
import { Head } from "react-static";

export default ({ meta: [{ meta_decription, meta_title, image }] }) => (
  <Head>
    <title>{meta_title}</title>
    <meta name="description" content={meta_decription} />
    <meta property="og:title" content={meta_title} />
    <meta property="og:description" content={meta_decription} />
    <meta property="og:image" content={image} />
  </Head>
);
