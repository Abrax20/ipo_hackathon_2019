import "./index.css";
import "storm-react-diagrams/dist/style.min.css";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import Routes from "./routes";
import store, { history } from "./store";

const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Routes />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
