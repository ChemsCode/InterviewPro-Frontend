import React from "react";
import SkillCard from "./SkillCard";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";

function DisplayTopSkills() {
  return (
    <div className="grid grid-flow-row grid-flow-colum grid-rows-1 gap-x-5 gap-y-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full w-full my-10">
      <div className="col-span-1 row-span-1 h-full w-full">
        <SkillCard icon={<RiNumber1 />} skill={"skill1"} desc={"skill1"} />
      </div>

      <div className="col-span-1 row-span-1 h-full w-full">
        <SkillCard icon={<RiNumber2 />} skill={"skill2"} desc={"skill1"} />
      </div>

      <div className="col-span-1 row-span-1 h-full w-full">
        <SkillCard icon={<RiNumber3 />} skill={"skill3"} desc={"skill1"} />
      </div>

      <div className="col-span-1 row-span-1 h-full w-full">
        <SkillCard icon={<RiNumber4 />} skill={"skill4"} desc={"skill1"} />
      </div>
    </div>
  );
}

export default DisplayTopSkills;
