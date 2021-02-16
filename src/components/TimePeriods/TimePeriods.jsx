import React from "react";

import { times } from "./../../helpers/const";

import { TimePeriodsContainer, TimePeriod } from "./TimePeriods.styled";

const TimePeriods = () => {
  const [activeTime, setActiveTime] = React.useState(1);

  const onTimeClick = (id) => {
    setActiveTime(id);
  };

  return (
    <TimePeriodsContainer>
      {times.map((time) => {
        const { id, timePeriod } = time;

        return (
          <TimePeriod
            onClick={() => onTimeClick(id)}
            key={id}
            activeTime={activeTime === id}
          >
            {timePeriod}
          </TimePeriod>
        );
      })}
    </TimePeriodsContainer>
  );
};

export default TimePeriods;
