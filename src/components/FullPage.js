import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const pluginWrapper = () => {
  require("fullpage.js/vendors/scrolloverflow");
};

export default ({ titles, backgrounds, render, startTransition }) => {
  return (
    <ReactFullpage
      pluginWrapper={pluginWrapper}
      scrollOverflow
      navigation
      normalScrollElements=".ReactModal__Content"
      anchors={titles.reduce(
        (acc, item, i) => {
          acc.push(`${backgrounds[i].toLowerCase()}`, `${item.toLowerCase()}`);
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
