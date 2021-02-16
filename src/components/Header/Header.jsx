import React from "react";

import ToggleDarkMode from "./../ToggleDarkMode/ToggleDarkMode";
import TimePeriods from "../TimePeriods/TimePeriods";

import {
  AppHeader,
  ToggleContainer,
  TimePeriodsContainer,
} from "./Header.styled";

const Header = () => {
  return (
    <AppHeader>
      <ToggleContainer>
        <ToggleDarkMode />
      </ToggleContainer>
      <TimePeriodsContainer>
        <TimePeriods />
      </TimePeriodsContainer>
    </AppHeader>
  );
};

export default Header;
