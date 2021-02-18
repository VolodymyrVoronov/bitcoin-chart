import React from "react";

import { useSelector } from "react-redux";

import Header from "../Header/Header";
import CoinChart from "../CoinChart/CoinChart";
import Preloader from "./../UI/Preloader/Preloader";
import ErrorMessage from "./../UI/ErrorMessage/ErrorMessage";

import { AppContainer } from "./App.styled";

const App = () => {
  const { isChartDataLoading, isErrorOccured } = useSelector(({ app }) => app);

  return (
    <AppContainer>
      {isErrorOccured ? null : <Header />}
      {isErrorOccured ? (
        <ErrorMessage />
      ) : (
        <>{isChartDataLoading ? <Preloader /> : <CoinChart />}</>
      )}
    </AppContainer>
  );
};

export default App;
