import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const pluginWrapper = () => {
  require("fullpage.js/vendors/scrolloverflow");
};

export default ({ titles, render, startTransition }) => {
  return (
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
        <ReactFullpage.Wrapper>{render({ fullpageApi })}</ReactFullpage.Wrapper>
      )}
    />
  );
};
