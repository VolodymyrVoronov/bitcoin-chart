import * as axios from "axios";

import { apiBody } from "../helpers/const";

const instanceAPI = axios.create({
  baseURL: apiBody,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "x-access-token":
      "coinranking14dc020648e28450dc148452db80e1b89901c08ed0bb3e01",
  },
});

export const appAPI = {
  getChartData() {
    return instanceAPI.get(`coin/Qwsogvtv82FCd/history?timePeriod=1y/`);
  },
};
