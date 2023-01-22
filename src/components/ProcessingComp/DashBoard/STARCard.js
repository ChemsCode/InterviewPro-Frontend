import React from "react";
import STARSubCard from "./STARSubCard";

function STARCard({ STARTitle }) {
  return (
    <div className=" grid grid-flow-row grid-flow-colum grid-rows-2 gap-x-12 gap-y-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 h-full w-full p-4">
      <div className="col-span-3 row-span-1 h-full w-full text-center font-medium">
        <p className="rounded-lg  py-2 border-b mx-8 mt-8">{STARTitle}</p>
      </div>

      <div className="col-span-1 row-span-1 h-full w-full">
        <STARSubCard title={"Strength"} param={"strength"} />
      </div>

      <div className="col-span-1 row-span-1 h-full w-full">
        <STARSubCard title={"Weakness"} param={"weakness"} />
      </div>

      <div className="col-span-1 row-span-1 h-full w-full">
        <STARSubCard title={"Improvement"} param={"example"} />
      </div>
    </div>
  );
}

export default STARCard;
