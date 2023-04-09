import React, { ReactNode } from "react";
import { Avatar } from "./Avatar";

interface Props {
  source: string;
  name: string;
  owner_name: string;
  owner_address: string;
}
export const OwnerCard: React.FC<Props> = ({
  source,
  name,
  owner_name,
  owner_address,
}) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar source={source} name={name} />
      <div className="flex flex-col">
        <p className="font-medium text-primary-900 text-lg">{owner_name}</p>
        <p className="font-medium text-primary-400 text-sm">{owner_address}</p>
      </div>
    </div>
  );
};
