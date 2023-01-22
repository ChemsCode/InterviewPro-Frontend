import RadarChart from "./RadarChart";
import WordCount from "./WordCount";
import TimeCount from "./TimeCount";
import LanguageRating from "./LanguageRating";
import StarRating from "./StarRating";
import FeedbackHeader from "./FeedbackHeader";

import React from "react";

function BriefDashboard() {
  return (
    <>
      <FeedbackHeader overallRating={8} />
      <div className="grid grid-flow-row grid-flow-colum grid-rows-3 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6  h-full w-full">
        <div className="col-span-2 row-span-3 h-full w-full">
          <RadarChart
            com={5}
            lead={2}
            team={4}
            crit={4}
            int={8}
            amb={1}
            flex={8}
          />
        </div>

        <div className="col-span-1 row-span-1 h-full w-full">
          <WordCount />
        </div>
        <div className="col-span-1 row-span-1 h-full w-full">
          <TimeCount />
        </div>
        <div className="col-span-2 row-span-3 h-full w-full">
          <StarRating />
        </div>
        <div className="col-span-2 row-span-2 h-full w-full">
          <LanguageRating coherence={8} clarity={5} grammar={7} />
        </div>
      </div>
    </>
  );
}

export default BriefDashboard;
