import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
export const SocialMediaFooter: React.FC = () => {
  return (
    <div className="flex items-center gap-6 mt-8">
      <FaFacebookF className="cursor-pointer" size={24} color="#3C4563" />
      <FaTwitter className="cursor-pointer" size={24} color="#3C4563" />
      <RiInstagramFill className="cursor-pointer" size={24} color="#3C4563" />
    </div>
  );
};
