import React from "react";

import {
  ErrorMessageContainer,
  ErrorMessageTitle,
  ErrorMessageIcon,
  ErrorMessageText,
} from "./ErrorMessage.styled";

const ErrorMessage = () => {
  return (
    <ErrorMessageContainer>
      <ErrorMessageTitle>Something has gone wrong!</ErrorMessageTitle>
      <ErrorMessageIcon />
      <ErrorMessageText>
        Please, refresh the site and try again.
      </ErrorMessageText>
    </ErrorMessageContainer>
  );
};

export default ErrorMessage;
