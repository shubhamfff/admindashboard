import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const randomColor = "#" + Math.floor(Math.random() * 16177215).toString(16);
const randomColor1 = "#" + Math.floor(Math.random() * 16077315).toString(16);
const randomColor2 = "#" + Math.floor(Math.random() * 16277815).toString(16);
const randomColor3 = "#" + Math.floor(Math.random() * 15777615).toString(16);
const randomColor4 = "#" + Math.floor(Math.random() * 12777415).toString(16);

export const data = {
  labels: [
    "DAY CARE WARD",
    "MULTI SHARING MALE WARD",
    "SINGLE ROOM",
    "TWIN SHARING ROOM",
  ],
  datasets: [
    {
      label: "Bed Ocuppancy",
      data: [52.94, 5.88, 23.57, 17.56],
      backgroundColor: [
        randomColor,
        randomColor1,
        randomColor2,
        randomColor3,
        randomColor4,
        randomColor,
      ],
      borderColor: [
        randomColor,
        randomColor1,
        randomColor2,
        randomColor3,
        randomColor4,
        randomColor,
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Bed Ocuppancy",
    },
  },
};

export function Piechart() {
  return <Doughnut options={options} data={data} />;
}
