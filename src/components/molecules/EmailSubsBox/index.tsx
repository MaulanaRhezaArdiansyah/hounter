import React, { useState } from "react";
import { SectionTitle } from "../../atoms/SectionTitle";
import { SearchBox } from "../../atoms/SearchBox";
// import { IoMail } from "react-icons/io5";
import { AiFillMail } from "react-icons/ai";

export const EmailSubsBox: React.FC = () => {
  const [texts, setTexts] = useState<string>("");
  const subscribe = (event: React.FormEvent) => {
    event.preventDefault();
    if (!texts.includes("@gmail.com")) {
      alert("Your input are wrong! Should be an email format!");
    } else {
      alert(`You're successfully subscribe to our website! 🥳`);
      setTexts("");
    }
  };

  return (
    <div className="relative w-full h-72 flex flex-col items-center justify-center rounded-2xl gradient-subs-email">
      <SectionTitle classname="w-[50%] text-center">
        Subscribe For More Info and update from Hounter
      </SectionTitle>
      <SearchBox
        onsubmitBro={subscribe}
        classname="bg-white w-[50%] mt-5"
        children="Subscribe Now"
        section="email-subs"
        widthButton="w-60"
        placeholder="Type your email here"
        texts={texts}
        setTexts={setTexts}
        iconSearch={<AiFillMail size={32} color="#3B82F6" />}
      />
      <div className="absolute left-5 w-60 h-60">
        <div className="flex items-center justify-center rounded-3xl w-16 h-16 border-[3px] border-white overflow-hidden absolute left-4 top-6">
          <img src="https://househunter.vercel.app/email-1.png" alt="" />
        </div>
        <div className="flex items-center justify-center rounded-full w-10 h-10 border-[3px] border-white overflow-hidden absolute right-10 top-12">
          <img
            src="https://househunter.vercel.app/ronald-richards.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center rounded-full w-10 h-10 border-[3px] border-white overflow-hidden absolute left-6 bottom-14">
          <img src="https://househunter.vercel.app/dianne-russell.png" alt="" />
        </div>
        <div className="flex items-center justify-center rounded-3xl w-14 h-14 border-[3px] border-white overflow-hidden absolute right-8 bottom-8">
          <img src="https://househunter.vercel.app/email-2.png" alt="" />
        </div>
      </div>
      <div className="absolute right-5 w-60 h-60">
        <div className="flex items-center justify-center rounded-3xl w-16 h-16 border-[3px] border-white overflow-hidden absolute left-4 top-6">
          <img src="https://househunter.vercel.app/email-3.png" alt="" />
        </div>
        <div className="flex items-center justify-center rounded-full w-10 h-10 border-[3px] border-white overflow-hidden absolute right-10 top-[68px]">
          <img src="https://househunter.vercel.app/robert-fox.png" alt="" />
        </div>
        <div className="flex items-center justify-center rounded-full w-10 h-10 border-[3px] border-white overflow-hidden absolute left-10 bottom-20">
          <img src="https://househunter.vercel.app/dianne-russell.png" alt="" />
        </div>
        <div className="flex items-center justify-center rounded-3xl w-14 h-14 border-[3px] border-white overflow-hidden absolute right-8 bottom-8">
          <img src="https://househunter.vercel.app/email-2.png" alt="" />
        </div>
      </div>
    </div>
  );
};
