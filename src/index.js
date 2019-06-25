import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import "./index.scss";
import App from "./App";
import Modal from 'react-modal'
export default App;

// Render your app
if (typeof document !== "undefined") {
  Modal.setAppElement('#root')

  const target = document.getElementById("root");

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render;

  const render = Comp => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
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
