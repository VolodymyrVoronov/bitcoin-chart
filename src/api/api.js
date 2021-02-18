import * as axios from "axios";

import { apiBody } from "../helpers/const";

const instanceAPI = axios.create({
  baseURL: apiBody,
});

export const appAPI = {
  getChartData(startDate, endDate) {
    return instanceAPI.get(
      `bpi/historical/close.json?start=${startDate}&end=${endDate}`
    );
  },
};
