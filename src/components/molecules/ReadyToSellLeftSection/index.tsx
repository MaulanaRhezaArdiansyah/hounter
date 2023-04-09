import React from "react";
import { SectionCategory } from "../../atoms/SectionCategory";
import { SectionTitle } from "../../atoms/SectionTitle";

export const ReadyToSellLeftSection: React.FC = () => {
  return (
    <div className="w-1/2">
      <SectionCategory>Ready to Sell!</SectionCategory>
      <SectionTitle>Let’s tour and see our house!</SectionTitle>
      <p className="text-primary-600 text-base pl-12 w-[90%] mb-5">
        Houses recommended by our partners that have been curated to become the
        home of your dreams!
      </p>
      <p className="text-primary-800 font-semibold pl-12">House Detail</p>
    </div>
  );
};
