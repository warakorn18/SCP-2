import React, { useEffect, useState } from "react";
import {
  Chart as Chartjs,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "../styles/LineChart.css";

Chartjs.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);



const LineChart = () => {

  const [lineChart, setLineChart] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:3001/data");
      // console.log(data.map((item) => item.cpk_lost));
      setLineChart({
  labels: data.map((item) => item.cpk_lost),
  datasets: [
    {
      label: "Front-Pos",
      backgroundColor: "rgb(255, 199, 132)",
      borderColor: "rgb(05, 99, 135)",
      data: data.map((item) => item.cpk_front_pos),
    },
    {
        label: "Front-Width",
        backgroundColor: "rgb(35, 150, 13)",
        borderColor: "rgb(130, 199, 132)",
        data: data.map((item) => item.cpk_front_width),
      },
      {
        label: "Back-Pos",
        backgroundColor: "rgb(215, 19, 132)",
        borderColor: "rgb(255, 99, 13)",
        data: data.map((item) => item.cpk_back_pos),
      },
      {
          label: "Back-Width",
          backgroundColor: "rgb(255, 50, 13)",
          borderColor: "rgb(205, 99, 122)",
          data: data.map((item) => item.cpk_back_width),
        },
    ],
  });
};
fetchData();
}, []);

  return (
    <div>
     {lineChart && lineChart.datasets && (
        <Line
          data={lineChart}
          options={{
            responsive: true
          }}
          width={1200}
          height={300}
         
        />
      )}
    </div>
  );
};

export default LineChart;