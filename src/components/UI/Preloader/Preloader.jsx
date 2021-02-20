import React from "react";

import { useSelector } from "react-redux";

import {
  PreloaderContainer,
  PreloaderBody,
  PreloaderBlockOne,
  PreloaderBlockTwo,
} from "./Preloader.styled";

const Preloader = () => {
  const { isDarkModeOn } = useSelector(({ app }) => app);

  return (
    <PreloaderContainer>
      <PreloaderBody>
        <PreloaderBlockOne isDarkModeOn={isDarkModeOn}></PreloaderBlockOne>
        <PreloaderBlockTwo isDarkModeOn={isDarkModeOn}></PreloaderBlockTwo>
      </PreloaderBody>
    </PreloaderContainer>
  );
};

export default Preloader;
