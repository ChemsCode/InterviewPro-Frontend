import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);




function DoughnutChart({star, score} ) {
  const data = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [10-score, score],
        backgroundColor: [
          'rgba(255, 255, 255, 0.2)',
          'rgba(0, 255, 0, 0.2)',
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(0, 255, 0, 1)',
        ],
        borderWidth: 1,
      },
  
    ],
  };
  return (
    <div className="col-span-1 row-span-1 flex flex-col rounded-lg duration-300 justify-center">

        <div className="text-center font-medium">
          <p className=" border-b mx-8 mt-8">{star}</p>
          <Doughnut data={data} />
        </div>
      </div>
  )
}

export default DoughnutChart