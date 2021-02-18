import React from "react";

import {
  PreloaderContainer,
  PreloaderBody,
  PreloaderBlockOne,
  PreloaderBlockTwo,
} from "./Preloader.styled";

const Preloader = () => {
  return (
    <PreloaderContainer>
      <PreloaderBody>
        <PreloaderBlockOne></PreloaderBlockOne>
        <PreloaderBlockTwo></PreloaderBlockTwo>
      </PreloaderBody>
    </PreloaderContainer>
  );
};

export default Preloader;
