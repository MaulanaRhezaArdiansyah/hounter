import React from "react";
import { BlurImage2 } from "./BlurImage2";
import { ReadyToSellLeftSection } from "../../../molecules/ReadyToSellLeftSection";
import { ReadyToSellRightSection } from "../../../molecules/ReadyToSellRightSection";

export const ReadyToSell: React.FC = () => {
  return (
    <div className="relative flex items-center pt-32 pl-20">
      <BlurImage2 />
      <ReadyToSellLeftSection />
      <ReadyToSellRightSection />
    </div>
  );
};
