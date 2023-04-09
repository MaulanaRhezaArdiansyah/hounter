import React from "react";

interface Props {
  children: string;
  display?: string;
}
export const SectionCategory: React.FC<Props> = ({
  children,
  display = "flex items-center gap-3",
}) => {
  return (
    <div className={`${display} mb-3`}>
      <div className="h-[2px] w-10 rounded-full bg-orange-1000"></div>
      <p className="text-orange-1000 text-md">{children}</p>
    </div>
  );
};
