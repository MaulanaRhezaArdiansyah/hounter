import React from "react";
import { SectionTitle } from "../../atoms/SectionTitle";
import { SearchBox } from "../../atoms/SearchBox";
// import { IoMail } from "react-icons/io5";
import { AiFillMail } from "react-icons/ai";

export const EmailSubsBox: React.FC = () => {
  return (
    <div className="w-full h-72 flex flex-col items-center justify-center rounded-2xl gradient-subs-email">
      <SectionTitle classname="w-[50%] text-center">
        Subscribe For More Info and update from Hounter
      </SectionTitle>
      <SearchBox
        classname="bg-white w-[60%] mt-5"
        children="Subscribe Now"
        section="email-subs"
        widthButton="w-60"
        placeholder="Text your email here"
        iconSearch={<AiFillMail size={32} color="#3B82F6" />}
      />
    </div>
  );
};
