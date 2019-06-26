import React, { Fragment, useCallback, useState } from "react";
import { useSiteData } from 'react-static';
import ReactFullpage from "@fullpage/react-fullpage";
import Overlay from "./components/Overlay";
import Nav from "./components/Nav";
import FalseMaster from "./components/FalseMaster";
import SvgOverlay from "./components/SvgOverlay";
import TextAbout from "./components/About";
import TextNews from "./components/News";
import TextArtists from "./components/Artists";

const backgrounds = ["venice", "wroclaw", "athens"];
const titles = ["About", "News", "Artists"];
const copy = [TextAbout, TextNews, TextArtists];

if (typeof window !== "undefined") {
  backgrounds.forEach(bk => {
    const img = new Image();
    img.src = `/images/${bk}.jpg`;
  });
}

const pluginWrapper = () => {
  require("fullpage.js/vendors/scrolloverflow");
};
export default () => {
  const siteData = useSiteData();

  const [currentBackground, setCurrentBackground] = useState(0);
  const [logoVisible, setLogoVisible] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);

  const pagesHelper = useCallback(
    next => {
      setLogoVisible(next <= 2);
      setCurrentBackground(Math.max(0, Math.floor((next - 2) / 2)));
    },
    [setLogoVisible, setCurrentBackground]
  );

  const startTransition = useCallback(
    (current, nextPage) => {
      setMenuVisible(nextPage.anchor === "about-pre");
      pagesHelper(nextPage.index + 1);
      window.fp_scrolloverflow.iscrollHandler.iScrollInstances.map(instance =>
        setTimeout(() => instance.scrollTo(0, 0), 1000)
      );
    },
    [pagesHelper, setMenuVisible]
  );

  return (
    <div className="master">
      <FalseMaster
        logoVisible={logoVisible}
        backgrounds={backgrounds}
        currentBackground={currentBackground}
      />

      <ReactFullpage
        pluginWrapper={pluginWrapper}
        scrollOverflow
        navigation
        normalScrollElements=".ReactModal__Content"
        anchors={titles.reduce(
          (acc, item) => {
            acc.push(`${item.toLowerCase()}-pre`, `${item.toLowerCase()}`);
            return acc;
          },
          [""]
        )}
        onLeave={startTransition}
        render={({ fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section" />

            {backgrounds.map((background, i) => {
              const title = titles[i];
              const Copy = copy[i];

              return (
                <Fragment key={background}>
                  <SvgOverlay name={background}>
                    <Nav api={fullpageApi} sections={titles} isVisible={menuVisible}/>
                  </SvgOverlay>
                  <Overlay title={title} name={background}>
                    <Copy siteData={siteData} api={fullpageApi} />
                  </Overlay>
                </Fragment>
              );
            })}
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};
