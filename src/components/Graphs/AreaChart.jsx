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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Total Monthly Gross Salary (Values in INR)",
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

export const data = {
  labels,
  datasets: [
    {
      label: "2022-2023",
      data: [
        25149108, 25608215, 25577393, 26527848, 26500069, 26421972, 26269888,
        25460738, 25364843, 29114630, 29407792, 29544250, 320946746,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "2018-2019",
      data: [
        28624897, 29541951, 29220544, 30342190, 31608338, 32315662, 34075076,
        34056240, 34122868, 34901467, 34684924,
      ],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function AreaChart() {
  return <Line options={options} data={data} />;
}
