import React, { useCallback, useState, useEffect } from "react";
import { useSiteData } from "react-static";
import Head from "./components/Head";
import Body from "./components/Body";
import FullPage from "./components/FullPage";
import FalseMaster from "./components/FalseMaster";

export default () => {
  const siteData = useSiteData();
  const backgrounds = siteData.section.map(({ city }) => city);
  const titles = siteData.section.map(({ title }) => title);

  useEffect(() => {
    if (typeof window !== "undefined") {
      backgrounds.forEach(city => {
        const img = new Image();
        img.src = `/images/${city}.jpg`;
      });
    }
  }, [siteData.section]);

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
          startTransition={startTransition}
          render={({ fullpageApi }) => (
            <Body
              siteData={siteData}
              menuVisible={menuVisible}
              titles={titles}
              backgrounds={backgrounds}
              fullpageApi={fullpageApi}
            />
          )}
        />
      </div>
    </>
  );
};
