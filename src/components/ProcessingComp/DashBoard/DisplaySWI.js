import React from "react";
import SWCard from "./SWCard";
import { FaTools } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import { GiSkeleton } from "react-icons/gi";

function DisplaySWI( {fb} ) {
  return (
    <div className="grid grid-flow-row grid-flow-colum grid-rows-2 gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  h-full w-full p-10 rounded-md">
      <div className="col-span-1 row-span-1 h-full w-full bg-white rounded-md">
        <SWCard
          icons={<GiBiceps />}
          title={"Strenghts"}
          param1={fb.strength1}
          param2={fb.strength2}
        />
      </div>

      <div className="col-span-1 row-span-2 h-full w-full bg-white rounded-md">
        <SWCard
          icons={<FaTools />}
          title={"Improvements"}
          param1={fb.improvement1}
          param2={fb.improvement2}
        />
      </div>
      <div className="col-span-1 row-span-1 h-full w-full bg-white rounded-md">
        <SWCard
          icons={<GiSkeleton />}
          title={"Weaknesses"}
          param1={fb.weakness1}
          param2={fb.weakness2}
        />
      </div>
    </div>
  );
}

export default DisplaySWI;
