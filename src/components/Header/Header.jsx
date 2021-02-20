import React from "react";

import { MobileView, isMobile } from "react-device-detect";

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
        {MobileView && isMobile ? null : <ToggleDarkMode />}
      </ToggleContainer>
      <TimePeriodsContainer>
        <TimePeriods />
      </TimePeriodsContainer>
    </AppHeader>
  );
};

export default Header;
