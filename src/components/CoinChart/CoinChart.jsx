import React from "react";

import { useSelector } from "react-redux";

import { Line } from "react-chartjs-2";

import { ChartContainer } from "./CoinChart.styled";

const CoinChart = () => {
  const { chartData } = useSelector(({ app }) => app);

  const data = {
    labels: Object.keys(chartData).map((key) =>
      new Date(key).toLocaleDateString()
    ),
    datasets: [
      {
        label: "",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#69c7ff",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#69c7ff",
        pointBackgroundColor: "#84d2ff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#69c7ff",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
        data: Object.values(chartData),
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
  };

  return (
    <ChartContainer>
      <Line data={data} options={options} />
    </ChartContainer>
  );
};

export default CoinChart;