import React from "react";

function SWCard({ icons, title, param1, param2 }) {
  return (
    <div className="col-span-1 row-span-1 shadow-xl flex flex-col p-4 rounded-lg duration-300 h-full w-full justify-around bg-white rounded-md">
      <div className="text-center font-medium ">
        <h1
          className="flex items-center justify-center "
          style={{ fontSize: "3rem" }}
        >
          {icons}
        </h1>
        <p className=" bg-green-400 rounded-lg  py-2 border-b mx-8 mt-8">
          {title}
        </p>
        <ul class="space-y-1 text-gray-900 list-decimal list-inside">
          <li>{param1}</li>
          <li>{param2}</li>
        </ul>
      </div>
    </div>
  );
}

export default SWCard;
