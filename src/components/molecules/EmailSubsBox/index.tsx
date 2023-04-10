import React from "react";
import { SectionTitle } from "../../atoms/SectionTitle";
import { SearchBox } from "../../atoms/SearchBox";
// import { IoMail } from "react-icons/io5";
import { AiFillMail } from "react-icons/ai";

export const EmailSubsBox: React.FC = () => {
  return (
    <div className="relative w-full h-72 flex flex-col items-center justify-center rounded-2xl gradient-subs-email">
      <SectionTitle classname="w-[50%] text-center">
        Subscribe For More Info and update from Hounter
      </SectionTitle>
      <SearchBox
        classname="bg-white w-[50%] mt-5"
        children="Subscribe Now"
        section="email-subs"
        widthButton="w-60"
        placeholder="Text your email here"
        iconSearch={<AiFillMail size={32} color="#3B82F6" />}
      />
      <div className="absolute left-5 w-60 h-60">
        <div className="flex items-center justify-center rounded-3xl w-16 h-16 border-[3px] border-white overflow-hidden absolute left-4 top-6">
          <img src="../../../../public/email-1.png" alt="" />
        </div>
        <div className="flex items-center justify-center rounded-full w-10 h-10 border-[3px] border-white overflow-hidden absolute right-10 top-12">
          <img src="../../../../public/ronald-richards.png" alt="" />
        </div>
        <div className="flex items-center justify-center rounded-full w-10 h-10 border-[3px] border-white overflow-hidden absolute left-6 bottom-14">
          <img src="../../../../public/dianne-russell.png" alt="" />
        </div>
        <div className="flex items-center justify-center rounded-3xl w-14 h-14 border-[3px] border-white overflow-hidden absolute right-8 bottom-8">
          <img src="../../../../public/email-2.png" alt="" />
        </div>
      </div>
      <div className="absolute right-5 w-60 h-60">
        <div className="flex items-center justify-center rounded-3xl w-16 h-16 border-[3px] border-white overflow-hidden absolute left-4 top-6">
          <img src="../../../../public/email-3.png" alt="" />
        </div>
        <div className="flex items-center justify-center rounded-full w-10 h-10 border-[3px] border-white overflow-hidden absolute right-10 top-[68px]">
          <img src="../../../../public/robert-fox.png" alt="" />
        </div>
        <div className="flex items-center justify-center rounded-full w-10 h-10 border-[3px] border-white overflow-hidden absolute left-10 bottom-20">
          <img src="../../../../public/dianne-russell.png" alt="" />
        </div>
        <div className="flex items-center justify-center rounded-3xl w-14 h-14 border-[3px] border-white overflow-hidden absolute right-8 bottom-8">
          <img src="../../../../public/email-2.png" alt="" />
        </div>
      </div>
    </div>
  );
};
