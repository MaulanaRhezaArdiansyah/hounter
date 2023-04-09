import React from "react";
interface Props {
  children: number;
}
export const PriceCard: React.FC<Props> = ({ children }) => {
  return (
    <h4 className="text-xl font-medium text-primary-700 mb-5">
      $ {children.toLocaleString()}
    </h4>
  );
};
