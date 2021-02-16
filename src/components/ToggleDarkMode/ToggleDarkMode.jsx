import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const ToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(() => false);
  console.log(isDarkMode);

  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80}
      speed={1.5}
    />
  );
};

export default ToggleDarkMode;
