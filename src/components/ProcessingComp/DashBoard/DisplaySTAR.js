import React from "react";
import STARCard from "./STARCard";

function DisplaySTAR() {
  return (
    <div className="grid grid-flow-row grid-flow-colum grid-rows-4 gap-x-12 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 h-full w-full my-10 ">
      <div className="col-span-1 row-span-1 h-full w-full rounded-md">
        <STARCard STARTitle={"Situation"} />
      </div>

      <div className="col-span-1 row-span-1 h-full w-full rounded-md">
        <STARCard STARTitle={"Task"} />
      </div>

      <div className="col-span-1 row-span-1 h-full w-full">
        <STARCard STARTitle={"Action"} />
      </div>

      <div className="col-span-1 row-span-1 h-full w-full">
        <STARCard STARTitle={"Result"} />
      </div>
    </div>
  );
}

export default DisplaySTAR;
