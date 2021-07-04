import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { chartData } from "../data";
import "styles/chart.css";
import GoogleMap from "./GoogleMap";

const Chart = () => {
  return (
    <div className="chartWrap">
      <GoogleMap />
      <Doughnut
        data={chartData}
        className="chart doughnut"
        options={{
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
      />
      <Bar
        data={chartData}
        className="chart bar"
        options={{
          maintainAspectRatio: true,
          plugins: {
            legend: true,
          },
        }}
      />
    </div>
  );
};

export default Chart;
