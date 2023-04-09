import React from "react";

interface Props {
  bgColor?: string;
  textColor?: string;
  preferences?: string;
}
export const Badge: React.FC<Props> = ({
  bgColor = "bg-[#FEE2E2]",
  textColor = "text-[#EF4444]",
  preferences,
}) => {
  return (
    <div
      className={`absolute ${
        preferences === "Popular"
          ? bgColor
          : preferences === "New House"
          ? "bg-[#DBEAFE]"
          : preferences === "Best Deals"
          ? "bg-[#D1FAE5]"
          : bgColor
      } ${
        preferences === "Popular"
          ? textColor
          : preferences === "New House"
          ? "text-[#1D4ED8]"
          : preferences === "Best Deals"
          ? "text-[#047857]"
          : textColor
      } px-5 py-[6px] rounded-full bottom-10 left-3`}
    >
      {preferences}
    </div>
  );
};
