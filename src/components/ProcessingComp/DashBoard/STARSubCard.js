import React from "react";

function STARSubCard({ title, param }) {
  return (
    <div className="col-span-1 row-span-1 shadow-xl flex flex-col rounded-lg duration-300 h-full w-full justify-around bg-white">
      <div className="text-center font-medium">
        <p className=" bg-green-400 rounded-lg  py-2 border-b mx-8 mt-8">
          {title}
        </p>
        <ul class="max-w-md space-y-1 text-gray-800 list-disc list-inside dark:text-gray-400">
          <li>{param}</li>
        </ul>
      </div>
    </div>
  );
}

export default STARSubCard;
