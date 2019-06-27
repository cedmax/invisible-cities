import React, { Fragment } from "react";
import Overlay from "./Overlay";
import TextAbout from "./About";
import TextNews from "./News";
import TextArtists from "./Artists";

const copy = {
  About: TextAbout,
  News: TextNews,
  Artists: TextArtists,
};

export default ({ backgrounds, siteData, fullpageApi, titles }) => (
  <>
    <div className="section" />
    {backgrounds.map((background, i) => {
      const title = titles[i];
      const Copy = copy[title];

      return (
        <Fragment key={background}>
          <Overlay name={background} />

          <Overlay title={title} name={background}>
            <Copy siteData={siteData} api={fullpageApi} />
          </Overlay>
        </Fragment>
      );
    })}
  </>
);
