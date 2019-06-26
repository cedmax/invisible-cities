import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import "./index.scss";
import Modal from "react-modal";
import App from "./App";

export default App;

// Render your app
if (typeof document !== "undefined") {
  Modal.setAppElement("#root");

  const target = document.getElementById("root");

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render;

  const render = Comp => {
    renderMethod(
      <Suspense fallback={<div />}>
        <AppContainer>
          <Comp />
        </AppContainer>
      </Suspense>,
      target
    );
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept("./App", () => {
      render(App);
    });
  }
}

if (typeof window !== "undefined") {
  const serviceWorker = require("./serviceWorker");
  serviceWorker.unregister();
}
