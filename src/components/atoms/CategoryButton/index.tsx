import React, { ReactNode, useState } from "react";
interface Props {
  classname?: string;
  categoryLogo: ReactNode;
  children: string;
  classnameCondition: string;
}
export const CategoryButton: React.FC<Props> = ({
  categoryLogo,
  children,
  classnameCondition,
}) => {
  return (
    <div
      className={`rounded-full flex items-center justify-center border cursor-pointer py-2 px-3 ${classnameCondition} hover:text-green-1200 hover:border-green-1000 hover:bg-green-1000 text-lg duration-150 gap-2`}
    >
      {categoryLogo}
      {children}
    </div>
  );
};
