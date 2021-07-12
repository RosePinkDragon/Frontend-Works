import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import store from "components/Tasks/AdminUIClass/redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
