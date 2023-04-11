import React from "react";
import { Logo } from "../../../atoms/Logo";
import { HashLink } from "react-router-hash-link";

import { BlurImageFooter } from "../../../atoms/BlurImageFooter";
import { SocialMediaFooter } from "../../../molecules/SocialMediaFooter";
import { FooterInfo } from "../../../molecules/FooterInfo";

export const Footer: React.FC = () => {
  return (
    <div className="relative flex px-20 mt-32 h-80 pt-10">
      <BlurImageFooter />
      <div className="flex flex-col items-start md:w-[40%]">
        <Logo />
        <p className="text-primary-400 leading-7 mt-5 md:w-[80%]">
          We provide information about properties such as houses, villas and
          apartments to help people find their dream home
        </p>
        <SocialMediaFooter />
      </div>
      <div className="flex md:gap-32">
        <FooterInfo infoTitle="Property">
          <HashLink to={"/#recommendation"} smooth>
            House
          </HashLink>
          <HashLink to={"/#recommendation"} smooth>
            Villa
          </HashLink>
          <HashLink to={"/#recommendation"} smooth>
            Apartment
          </HashLink>
        </FooterInfo>
        <FooterInfo infoTitle="Article">
          <p>New Article</p>
          <p>Popular Article</p>
          <p>Most Read</p>
          <p>Tips & Tricks</p>
        </FooterInfo>
        <FooterInfo infoTitle="Contact">
          <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
          <p>(671) 555-0110</p>
          <p>info@hounter.com</p>
        </FooterInfo>
      </div>
    </div>
  );
};
