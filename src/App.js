import React, { useCallback, useState } from "react";
import { useSiteData } from "react-static";
import Head from "./components/Head";
import Body from "./components/Body";
import FullPage from "./components/FullPage";
import FalseMaster from "./components/FalseMaster";

export default () => {
  const siteData = useSiteData();
  const backgrounds = siteData.section.map(({ city }) => city);
  const titles = siteData.section.map(({ title }) => title);

  const [currentBackground, setCurrentBackground] = useState(0);
  const [logoVisible, setLogoVisible] = useState(true);
  const [sectionTitle, setSectionTitle] = useState("");

  const [menuVisible, setMenuVisible] = useState(false);

  const pagesHelper = useCallback(
    (next, nextIdx) => {
      setLogoVisible(nextIdx <= 2);
      setCurrentBackground(Math.max(0, Math.floor((nextIdx - 2) / 2)));
      setSectionTitle(next);
    },
    [setLogoVisible, setCurrentBackground]
  );

  const startTransition = useCallback(
    (current, nextPage) => {
      setMenuVisible(nextPage.anchor === backgrounds[0].toLowerCase());
      pagesHelper(nextPage.anchor, nextPage.index + 1);
      window.fp_scrolloverflow.iscrollHandler.iScrollInstances.map(instance =>
        setTimeout(() => instance.scrollTo(0, 0), 1000)
      );
    },
    [pagesHelper, setMenuVisible]
  );

  return (
    <>
      <Head meta={siteData.meta} />
      <div className="master">
        <FalseMaster
          logoVisible={logoVisible}
          backgrounds={backgrounds}
          currentBackground={currentBackground}
        />
        <FullPage
          titles={titles}
          backgrounds={backgrounds}
          startTransition={startTransition}
          render={({ fullpageApi }) => (
            <Body
              siteData={siteData}
              menuVisible={menuVisible}
              titles={titles}
              sectionTitle={sectionTitle}
              backgrounds={backgrounds}
              fullpageApi={fullpageApi}
            />
          )}
        />
      </div>
    </>
  );
};
