import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function RadarChart({ com, lead, team, crit, int, amb, flex }) {
  const data = {
    labels: [
      "Communication",
      "Leadership",
      "Teamwork",
      "Critical-Thinking",
      "Integrity",
      "Ambition",
      "Flexibility",
    ],
    datasets: [
      {
        label: "Top Skills",
        data: [com, lead, team, crit, int, amb, flex],
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        borderColor: "rgba(60, 179, 113, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="col-span-1 row-span-1 shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300 h-full w-full justify-start bg-white">
      <div className="text-center font-medium">
        <h1
          className="flex items-center justify-center my-5"
          style={{ fontSize: "2rem" }}
        >
          Radar Chart
        </h1>
        <Radar data={data} />
      </div>
    </div>
  );
}

export default RadarChart;
