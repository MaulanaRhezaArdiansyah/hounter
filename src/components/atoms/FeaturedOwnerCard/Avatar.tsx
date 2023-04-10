import React from "react";

interface AvatarProps {
  source: string;
  name: string;
  classname?: string;
}
export const Avatar: React.FC<AvatarProps> = ({ source, name, classname }) => {
  return (
    <img
      src={source}
      alt={name}
      className={`rounded-full w-10 h-10 ${classname}`}
    />
  );
};
