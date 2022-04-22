import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

window.renderDonut = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
  serviceWorker.unregister();
};

window.unmountDonut = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById("Donut-container")) {
  ReactDOM.render(<App />, document.getElementById("root"));
  serviceWorker.unregister();
}
