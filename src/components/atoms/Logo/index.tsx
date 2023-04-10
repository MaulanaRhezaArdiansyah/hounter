import React from "react";
import { useNavigate } from "react-router-dom";
export const Logo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="flex items-center gap-3 cursor-pointer"
    >
      <img src="https://househunter.vercel.app/logo.png" alt="" />
      <p className="text-primary-800 font-bold text-lg">Hounter</p>
    </div>
  );
};
