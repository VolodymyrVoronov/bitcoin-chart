import { makeActionCreator } from "./../../helpers/makeActionCreator";

import { ActionType } from "./actionTypes";

export const getChartDataAC = makeActionCreator(
  ActionType.GET_CHART_DATA,
  `chartData`
);

export const isChartDataLoadingAC = makeActionCreator(
  ActionType.LOADING_CHART_DATA,
  `isChartDataLoading`
);