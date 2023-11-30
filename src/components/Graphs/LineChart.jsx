import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineChart({
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
    responsive: true,
    onClick: (e, element) => {
      if (element.length > 0) {
        alert("chart clicked");
      }
    },
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
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
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
  return <Line options={options} data={data} />;
}
