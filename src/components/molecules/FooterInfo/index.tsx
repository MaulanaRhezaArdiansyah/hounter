import React from "react";

interface Props {
  infoTitle: string;
  children: React.ReactNode;
}
export const FooterInfo: React.FC<Props> = ({ infoTitle, children }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-primary-900 font-semibold text-lg mb-4">
        {infoTitle}
      </h4>
      <div className="flex flex-col text-primary-400 font-normal gap-3 cursor-pointer">
        {children}
      </div>
    </div>
  );
};
