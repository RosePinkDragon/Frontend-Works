<<<<<<< Updated upstream
import store from "components/Tasks/AdminUIClass/redux/store";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
=======
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import store from "components/Tasks/AdminUIClass/redux/store";
import { Provider } from "react-redux";
>>>>>>> Stashed changes

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
