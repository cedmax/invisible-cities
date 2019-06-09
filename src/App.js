import React, { useCallback, useState, useRef } from "react";
import ReactPageScroller from "react-page-scroller";
import Overlay from "./components/Overlay";
import FalseMaster from "./components/FalseMaster";
import SvgOverlay from "./components/SvgOverlay";
import pages from "./helpers/pages";

export default () => {
  const pageScroller = useRef();
  const [currentBackground, setCurrentBackground] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [logoVisible, setLogoVisible] = useState(true);
  const pagesHelper = useCallback(
    pages({
      setCurrentBackground,
      setCurrentPage,
      setLogoVisible,
    }),
    []
  );
  const startTransition = useCallback(
    nextPage => pagesHelper(currentPage, nextPage),
    [currentPage, pagesHelper]
  );

  return (
    <div className="master">
      <FalseMaster
        logoVisible={logoVisible}
        currentBackground={currentBackground}
      />

      <ReactPageScroller ref={pageScroller} pageOnChange={startTransition}>
        <div />
        <SvgOverlay name="athens" />
        <Overlay name="athens" />
        <div />
        <SvgOverlay name="wroclaw" />
        <Overlay name="wroclaw" />
        <div />
        <SvgOverlay name="venice" />
        <Overlay name="venice" />
        <div />
        <SvgOverlay name="london" />
        <Overlay name="london" />
      </ReactPageScroller>
    </div>
  );
};
