import React from "react";
import SWCard from "./SWCard";
import { FaTools } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import { GiSkeleton } from "react-icons/gi";

function DisplaySWI() {
  return (
    <div className="grid grid-flow-row grid-flow-colum grid-rows-2 gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  h-full w-full p-10 rounded-md">
      <div className="col-span-1 row-span-1 h-full w-full bg-white rounded-md">
        <SWCard
          icons={<GiBiceps />}
          title={"Strenghts"}
          param1={"Strength1"}
          param2={"Strength2"}
        />
      </div>

      <div className="col-span-1 row-span-2 h-full w-full bg-white rounded-md">
        <SWCard
          icons={<FaTools />}
          title={"Improvements"}
          param1={"Improvement1"}
          param2={"Improvement2"}
        />
      </div>
      <div className="col-span-1 row-span-1 h-full w-full bg-white rounded-md">
        <SWCard
          icons={<GiSkeleton />}
          title={"Weaknesses"}
          param1={"Weakness1"}
          param2={"Weakness2"}
        />
      </div>
    </div>
  );
}

export default DisplaySWI;
