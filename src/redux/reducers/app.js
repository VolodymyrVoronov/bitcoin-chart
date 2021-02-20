import { ActionType } from "../actions/actionTypes";

import {
  getChartDataAC,
  isChartDataLoadingAC,
  getIsErrorOccuredAC,
} from "./../actions/actions";

import { appAPI } from "./../../api/api";

import { STATUS_CODE } from "./../../helpers/const";

const initialState = {
  chartData: [],
  isChartDataLoading: false,
  startDate: 1,
  isErrorOccured: false,
  isDarkModeOn: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_CHART_DATA: {
      return {
        ...state,
        chartData: action.chartData,
      };
    }

    case ActionType.LOADING_CHART_DATA: {
      return {
        ...state,
        isChartDataLoading: action.isChartDataLoading,
      };
    }

    case ActionType.IS_ERROR_OCCURED: {
      return {
        ...state,
        isErrorOccured: action.isErrorOccured,
      };
    }

    case ActionType.TOGGLE_DARK_MODE: {
      return {
        ...state,
        isDarkModeOn: !action.isDarkModeOn,
      };
    }

    default:
      return state;
  }
};

// Thunks
export const getChartData = (startDate, endDate) => async (dispatch) => {
  try {
    dispatch(isChartDataLoadingAC(true));
    const response = await appAPI.getChartData(startDate, endDate);
    if (response.status === STATUS_CODE.SUCCESS) {
      dispatch(getChartDataAC(response.data.bpi));
      dispatch(isChartDataLoadingAC(false));
    }
  } catch (error) {
    dispatch(getIsErrorOccuredAC(true));
    dispatch(isChartDataLoadingAC(false));
    console.log(error);
  }
};

export default appReducer;
