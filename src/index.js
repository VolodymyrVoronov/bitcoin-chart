import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import store from "./redux/store";

import { getChartData } from "./redux/reducers/app";

import App from "./components/App/App";

import GlobalStyles from "./styles/globalStyles";

store.dispatch(getChartData());

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
