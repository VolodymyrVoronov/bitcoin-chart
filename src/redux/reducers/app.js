import { ActionType } from "../actions/actionTypes";

import { getChartDataAC, isChartDataLoadingAC } from "./../actions/actions";

import { appAPI } from "./../../api/api";

import { STATUS_CODE } from "./../../helpers/const";

const initialState = {
  chartData: [],
  mockChartData: [
    { price: "49348.43426232244778597085", timestamp: 1613490000 },
    { price: "49299.65452533487369426468", timestamp: 1613490300 },
    { price: "49304.5622842625232224299", timestamp: 1613490600 },
    { price: "49290.52626924140484639587", timestamp: 1613490900 },
    { price: "49201.6640014446157216292", timestamp: 1613491200 },
    { price: "49218.86574515745424820122", timestamp: 1613491500 },
    { price: "49282.64406075772116375045", timestamp: 1613491800 },
    { price: "49220.20924777781665052093", timestamp: 1613492100 },
    { price: "49220.20164653339991449346", timestamp: 1613492400 },
    { price: "49031.90183966754108499256", timestamp: 1613492700 },
    { price: "49049.26010416743892882244", timestamp: 1613493000 },
    { price: "48939.60703670822755976079", timestamp: 1613493300 },
    { price: "48930.73398410184441140737", timestamp: 1613493600 },
    { price: "48907.64455757861554553315", timestamp: 1613493900 },
    { price: "48887.79605658952448885762", timestamp: 1613494200 },
    { price: "48755.35081282707263499114", timestamp: 1613494500 },
    { price: "48623.07240841835663361448", timestamp: 1613494800 },
    { price: "48414.07719055070503370126", timestamp: 1613495100 },
    { price: "48554.45625165215594167931", timestamp: 1613495400 },
    { price: "48484.13276968285080852748", timestamp: 1613495700 },
    { price: "48517.17399511426001518887", timestamp: 1613496000 },
    { price: "48507.89764643751882968913", timestamp: 1613496300 },
    { price: "48496.59811136872668813383", timestamp: 1613496600 },
    { price: "48532.4650910777169711918", timestamp: 1613496900 },
    { price: "48503.17390078870717855105", timestamp: 1613497200 },
    { price: "48577.74469246181676138871", timestamp: 1613497500 },
    { price: "48568.45159138942653887846", timestamp: 1613497800 },
    { price: "48592.90941430216944173895", timestamp: 1613498100 },
    { price: "48540.82227577879425981311", timestamp: 1613498400 },
    { price: "48333.64801254782188510631", timestamp: 1613498700 },
    { price: "48300.45801686465480368209", timestamp: 1613499000 },
    { price: "48134.77522555960499337208", timestamp: 1613499300 },
    { price: "48141.1947007484940495501", timestamp: 1613499600 },
    { price: "48370.31054270131091536236", timestamp: 1613499900 },
    { price: "48421.89984397000197779551", timestamp: 1613500200 },
    { price: "48499.82179329136517148493", timestamp: 1613500500 },
    { price: "48521.44330588765504628475", timestamp: 1613500800 },
    { price: "48529.33046900343247442496", timestamp: 1613500860 },
  ],
  isChartDataLoading: false,
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

    default:
      return state;
  }
};

// Thunks
export const getChartData = () => async (dispatch) => {
  try {
    dispatch(isChartDataLoadingAC(true));
    const response = await appAPI.getChartData();
    if (response.status === STATUS_CODE.SUCCESS) {
      console.log(response);
      dispatch(getChartDataAC(response.data[0]));
      dispatch(isChartDataLoadingAC(false));
    }
  } catch (error) {
    // dispatch(getIsErrorAC(true));
    console.log(error);
  }
};

export default appReducer;
