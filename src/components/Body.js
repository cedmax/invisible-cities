import React, { Fragment } from "react";
import Overlay from "./Overlay";
import Nav from "./Nav";
import SvgOverlay from "./SvgOverlay";
import TextAbout from "./About";
import TextNews from "./News";
import TextArtists from "./Artists";

const copy = {
  About: TextAbout,
  News: TextNews,
  Artists: TextArtists,
};

export default ({
  backgrounds,
  siteData,
  fullpageApi,
  sectionTitle,
  titles,
  menuVisible,
}) => (
  <>
    <div className="section" />
    {backgrounds.map((background, i) => {
      const title = titles[i];
      const Copy = copy[title];
      const isVisible = sectionTitle === background;
      return (
        <Fragment key={background}>
          <SvgOverlay isVisible={isVisible} name={background}>
            <Nav api={fullpageApi} sections={titles} isVisible={menuVisible} />
          </SvgOverlay>
          <Overlay title={title} name={background}>
            <Copy siteData={siteData} api={fullpageApi} />
          </Overlay>
        </Fragment>
      );
    })}
  </>
);
