import React from "react";

interface AvatarProps {
  source: string;
  name: string;
}
export const Avatar: React.FC<AvatarProps> = ({ source, name }) => {
  return <img src={source} alt={name} className="rounded-full w-10 h-10" />;
};
