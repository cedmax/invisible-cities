import React, { Fragment, useCallback, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Overlay from "./components/Overlay";
import Nav from "./components/Nav";
import FalseMaster from "./components/FalseMaster";
import SvgOverlay from "./components/SvgOverlay";
import pages from "./helpers/pages";
import TextAbout from "./components/About";
import TextNews from "./components/News";
import TextArtists from "./components/Artists";

const backgrounds = ["venice", "wroclaw", "athens"];
const titles = ["About", "News", "Artists"];
const copy = [TextAbout, TextNews, TextArtists];

const pluginWrapper = () => {
  require("fullpage.js/vendors/scrolloverflow");
};
export default () => {
  const [currentBackground, setCurrentBackground] = useState(0);
  const [logoVisible, setLogoVisible] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);

  const pagesHelper = useCallback(
    pages({
      setCurrentBackground,
      setLogoVisible,
    }),
    []
  );
  const startTransition = useCallback(
    (current, nextPage) => {
      setMenuVisible(nextPage.anchor === "About-overlay");
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
        anchors={titles.reduce((acc, item) => {
          acc.push(`${item}-empty`, `${item}-overlay`, `${item}-content`);
          return acc;
        }, [])}
        onLeave={startTransition}
        render={({ fullpageApi }) => (
          <ReactFullpage.Wrapper>
            {backgrounds.map((background, i) => {
              const title = titles[i];
              const Copy = copy[i];

              return (
                <Fragment key={background}>
                  <div className="section" />
                  <SvgOverlay name={background}>
                    {menuVisible && <Nav api={fullpageApi} sections={titles} />}
                  </SvgOverlay>
                  <Overlay title={title} name={background}>
                    <Copy />
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
