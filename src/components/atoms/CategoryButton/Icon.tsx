import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export const Icon: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
