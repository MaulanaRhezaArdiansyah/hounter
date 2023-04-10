import React from "react";
import { SectionCategory } from "../../../atoms/SectionCategory";
import { SectionTitle } from "../../../atoms/SectionTitle";

export const Review: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center pt-36">
      <SectionCategory display="flex-col gap-2">See Our Review</SectionCategory>
      <SectionTitle>What Our User Say About Us</SectionTitle>
    </div>
  );
};
