import React, { ReactNode } from "react";
interface Props {
  classname?: string;
  categoryLogo: ReactNode;
  children: string;
}
export const CategoryButton: React.FC<Props> = ({
  classname = "border-primary-400 text-primary-400 gap-2 hover:text-green-1200 hover:border-green-1000",
  categoryLogo,
  children,
}) => {
  return (
    <div
      className={`rounded-full flex items-center justify-center border ${classname} cursor-pointer py-2 px-3 bg-white hover:bg-green-1000 text-lg duration-150`}
    >
      {categoryLogo}
      {children}
    </div>
  );
};
