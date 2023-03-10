import React from "react";
import STARCard from "./STARCard";

function DisplaySTAR({fb}) {
  return (
    <div className="grid grid-rows-4 gap-x-12 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 h-full w-full my-10 py-10 ">
      <div className="col-span-1 row-span-1 h-full w-full rounded-md">
        <STARCard STARTitle={"Situation"} starfb={fb.situation}/>
      </div>

      <div className="col-span-1 row-span-1 h-full w-full rounded-md">
        <STARCard STARTitle={"Task"} starfb={fb.task}/>
      </div>

      <div className="col-span-1 row-span-1 h-full w-full">
        <STARCard STARTitle={"Action"} starfb={fb.action}/>
      </div>

      <div className="col-span-1 row-span-1 h-full w-full">
        <STARCard STARTitle={"Result"} starfb={fb.result}/>
      </div>
    </div>
  );
}

export default DisplaySTAR;
