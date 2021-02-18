import styled, { keyframes } from "styled-components";

const ldsRipple = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const PreloaderContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 1200px;

  margin: 0 auto;
  padding: 10px;
`;

const PreloaderBody = styled.div`
  display: inline-block;
  position: relative;

  width: 80px;
  height: 80px;

  margin-top: 25px;
`;

const PreloaderBlockOne = styled.div`
  position: absolute;
  border: 4px solid #69c7ff;
  opacity: 1;
  border-radius: 50%;
  animation: ${ldsRipple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;

const PreloaderBlockTwo = styled.div`
  position: absolute;
  border: 4px solid #69c7ff;
  opacity: 1;
  border-radius: 50%;
  animation: ${ldsRipple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  animation-delay: -0.5s;
`;

export {
  PreloaderContainer,
  PreloaderBody,
  PreloaderBlockOne,
  PreloaderBlockTwo,
};
