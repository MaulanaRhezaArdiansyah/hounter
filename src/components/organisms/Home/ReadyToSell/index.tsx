import React from "react";
import { BlurImage2 } from "./BlurImage2";
import { ReadyToSellLeftSection } from "../../../molecules/ReadyToSellLeftSection";

export const ReadyToSell: React.FC = () => {
  return (
    <div className="relative pt-32 pl-20">
      <BlurImage2 />
      <ReadyToSellLeftSection />
    </div>
  );
};
