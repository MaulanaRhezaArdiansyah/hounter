import React, { ReactNode } from "react";

interface Props {
  unitIcon: ReactNode;
  children: string;
}
export const PropertyDetail: React.FC<Props> = ({ unitIcon, children }) => {
  return (
    <div className="flex items-center text-primary-700 font-medium gap-3 w-40">
      {unitIcon}
      {children}
    </div>
  );
};
