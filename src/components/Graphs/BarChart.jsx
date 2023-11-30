import React from "react";
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

export function BarChart({
  chartName,
  data1,
  data2,
  dataset1Name,
  dataset2Name,
  borderColor,
  bgColor,
}) {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomColor1 = "#" + Math.floor(Math.random() * 16777315).toString(16);
  const options = {
    onClick: (e, element) => {
      if (element.length > 0) {
        alert("chart clicked");
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: chartName,
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: dataset1Name,
        data: data1,
        borderColor: randomColor,
        backgroundColor: randomColor,
      },
      {
        label: dataset2Name,
        data: data2,
        borderColor: randomColor1,
        backgroundColor: randomColor1,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
