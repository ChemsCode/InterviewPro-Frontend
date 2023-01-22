import React from "react";
import DoughnutChart from "./DoughnutChart";

function StarRating() {
  return (
    <div className="col-span-1 row-span-1 shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300 h-full w-full bg-white ">
      <h1
        className="flex items-center justify-center"
        style={{ fontSize: "2rem" }}
      >
        STAR
      </h1>
      <div className="grid grid-flow-row grid-flow-colum grid-rows-2 grid-cols-2 gap-2 h-full w-full">
        <DoughnutChart star={"Situation"} score={7} />
        <DoughnutChart star={"Task"} score={9} />
        <DoughnutChart star={"Action"} score={5} />
        <DoughnutChart star={"Result"} score={4} />
      </div>
    </div>
  );
}

export default StarRating;
