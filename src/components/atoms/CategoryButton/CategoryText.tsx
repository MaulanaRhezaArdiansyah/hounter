import React from "react";

interface Props {
  children: string;
}
export const CategoryText: React.FC<Props> = ({ children }) => {
  return <p>{children}</p>;
};
