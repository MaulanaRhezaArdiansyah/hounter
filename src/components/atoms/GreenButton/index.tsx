import React, { ReactNode } from "react";

interface Props {
  buttonIcon?: ReactNode;
  children: string;
  classname?: string;
}
export const GreenButton: React.FC<Props> = ({
  buttonIcon,
  children,
  classname,
}) => {
  return (
    <button
      className={`flex items-center bg-green-1200 text-white gap-3 py-3 px-5 rounded-full hover:bg-green-1300 duration-150 ${classname}`}
    >
      {buttonIcon}
      {children}
    </button>
  );
};
