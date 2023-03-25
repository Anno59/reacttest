import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import { createStore } from "redux";
import todoApp from "./reducer";
import { Provider } from "react-redux";
import { List, Map } from "immutable";

const store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
