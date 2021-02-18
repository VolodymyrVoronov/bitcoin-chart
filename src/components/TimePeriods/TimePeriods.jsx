import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { getChartData } from "./../../redux/reducers/app";

import { times } from "./../../helpers/const";

import { TimePeriodsContainer, TimePeriod } from "./TimePeriods.styled";
import { getStartDate } from "./../../helpers/getStartDay";
import { getEndDate } from "./../../helpers/getEndDate";

const TimePeriods = () => {
  const dispatch = useDispatch();

  const { isChartDataLoading } = useSelector(({ app }) => app);

  const [activeTime, setActiveTime] = React.useState(1);

  const onTimeClick = (id, numberOfDays) => {
    setActiveTime(id);

    dispatch(getChartData(getEndDate(numberOfDays), getStartDate().toString()));
  };

  return (
    <TimePeriodsContainer>
      {times.map((time) => {
        const { id, timePeriod, numberOfDays } = time;

        return (
          <TimePeriod
            onClick={() => onTimeClick(id, numberOfDays)}
            key={id}
            activeTime={activeTime === id}
            type="button"
            disabled={isChartDataLoading}
            isDisabled={isChartDataLoading}
          >
            {timePeriod}
          </TimePeriod>
        );
      })}
    </TimePeriodsContainer>
  );
};

export default TimePeriods;
