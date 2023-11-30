import React from "react";
import { useRef } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
const randomColor1 = "#" + Math.floor(Math.random() * 16777315).toString(16);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Admission Vs Discharge",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Admission",
      data: [300, 235, 254, 145, 220, 210, 200, 165, 111, 100],
      backgroundColor: randomColor,
    },
    {
      label: "Discharge",
      data: [250, 200, 150, 111, 200, 190, 152, 95, 85, 71],
      backgroundColor: randomColor1,
    },
  ],
};

export function VerticalBarChart() {
  const chartRef = useRef();

  const onBarClick = (e) => {
    console.log(e);
  };

  return (
    <Bar options={options} data={data} onClick={(event) => onBarClick(event)} />
  );
}
