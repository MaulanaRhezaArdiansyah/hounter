import React from "react";

interface Props {
  children: string;
}

export const SectionTitle: React.FC<Props> = ({ children }) => {
  return (
    <h2 className="text-primary-800 font-semibold text-4xl pl-12">
      {children}
    </h2>
  );
};
