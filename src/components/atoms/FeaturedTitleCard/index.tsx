import React from "react";
interface Props {
  children: string;
}
export const TitleCard: React.FC<Props> = ({ children }) => {
  return (
    <h3 className="font-medium text-2xl text-primary-800 mb-1">{children}</h3>
  );
};
