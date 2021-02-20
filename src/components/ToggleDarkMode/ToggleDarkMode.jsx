import React from "react";

import { useDispatch, useSelector } from "react-redux";

import DarkModeToggle from "react-dark-mode-toggle";

import { toggleDarkModeAC } from "../../redux/actions/actions";

const ToggleDarkMode = () => {
  const dispatch = useDispatch();

  const { isDarkModeOn } = useSelector(({ app }) => app);

  const onDarkModeClick = () => {
    dispatch(toggleDarkModeAC(isDarkModeOn));
  };

  return (
    <DarkModeToggle
      onChange={onDarkModeClick}
      checked={isDarkModeOn}
      size={80}
      speed={1.5}
    />
  );
};

export default ToggleDarkMode;
