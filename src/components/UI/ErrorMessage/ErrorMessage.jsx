import React from "react";

import { useSelector } from "react-redux";

import {
  ErrorMessageContainer,
  ErrorMessageTitle,
  ErrorMessageIcon,
  ErrorMessageText,
} from "./ErrorMessage.styled";

const ErrorMessage = () => {
  const { isDarkModeOn } = useSelector(({ app }) => app);

  return (
    <ErrorMessageContainer>
      <ErrorMessageTitle isDarkModeOn={isDarkModeOn}>
        Something has gone wrong!
      </ErrorMessageTitle>
      <ErrorMessageIcon isDarkModeOn={isDarkModeOn} />
      <ErrorMessageText isDarkModeOn={isDarkModeOn}>
        Please, refresh the site and try again.
      </ErrorMessageText>
    </ErrorMessageContainer>
  );
};

export default ErrorMessage;
