import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import store from "./redux/store";

import { getChartData } from "./redux/reducers/app";

import App from "./components/App/App";

import { getStartDate } from "./helpers/getStartDay";
import { getEndDate } from "./helpers/getEndDate";

import GlobalStyles from "./styles/globalStyles";

store.dispatch(getChartData(getEndDate(7), getStartDate().toString()));

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
