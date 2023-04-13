import React, { MouseEventHandler, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";

interface Props {
  children: string;
  onClick?: MouseEventHandler | undefined;
  colorNav: boolean;
  active?: string;
}

export const NavLink: React.FC<Props> = ({ children, onClick, active }) => {
  const location = useLocation();
  return (
    <div
      className={`text-[#F0F3FD] font-[600] border border-[#ffffff] rounded-full px-4 py-2 hover:bg-green-1000 hover:text-green-1300 hover:border-green-1000 duration-150 cursor-pointer flex items-center justify-between ${active}`}
    >
      {children === "Property" ? (
        <div className="flex items-center justify-between box-border">
          <p className="mr-3">{children}</p>
          <RiArrowDropDownLine size={24} />
        </div>
      ) : (
        <p className="">{children}</p>
      )}
    </div>
  );
};
