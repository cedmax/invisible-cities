import React, { Fragment, useEffect } from "react";
import Overlay from "./Overlay";
import Nav from "./Nav";
import SvgOverlay from "./SvgOverlay";
import About from "./About";
import News from "./News";
import Artists from "./Artists";
import Gallery from "./Gallery";

const copy = {
  About,
  News,
  Artists,
  Gallery
};

export default ({
  backgrounds,
  siteData,
  fullpageApi,
  sectionTitle,
  titles,
  menuVisible
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
