import React from "react";

import { useSelector } from "react-redux";

import Header from "../Header/Header";
import CoinChart from "../CoinChart/CoinChart";

import { AppContainer } from "./App.styled";

const App = () => {
  const { isChartDataLoading } = useSelector(({ app }) => app);

  return (
    <AppContainer>
      <Header />
      {isChartDataLoading ? `Loading` : <CoinChart />}
      {/* <CoinChart /> */}
    </AppContainer>
  );
};

export default App;
