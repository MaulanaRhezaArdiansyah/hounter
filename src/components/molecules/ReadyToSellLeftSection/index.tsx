import React from "react";
import { SectionCategory } from "../../atoms/SectionCategory";
import { SectionTitle } from "../../atoms/SectionTitle";
import { IoBed } from "react-icons/io5";
import { GiHomeGarage, GiBathtub, GiStairs } from "react-icons/gi";
import { Avatar } from "../../atoms/FeaturedOwnerCard/Avatar";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PropertyDetail } from "../../atoms/PropertyDetail";
import { GreenButton } from "../../atoms/GreenButton";

export const ReadyToSellLeftSection: React.FC = () => {
  return (
    <div className="w-1/2">
      <SectionCategory>Ready to Sell!</SectionCategory>
      <SectionTitle>Let’s tour and see our house!</SectionTitle>
      <p className="text-primary-600 text-base pl-12 w-[85%] mb-5">
        Houses recommended by our partners that have been curated to become the
        home of your dreams!
      </p>
      <p className="text-primary-800 font-semibold pl-12 mb-4">House Detail</p>
      <div className="ml-12 flex flex-wrap gap-x-10 gap-y-4 border-b-2 w-[80%] border-[#F0F3FD] pb-8 mb-8">
        <PropertyDetail
          unitIcon={<IoBed size={24} />}
          children={"4 Bedrooms"}
        />
        <PropertyDetail
          unitIcon={<GiBathtub size={24} />}
          children={"2 Bathrooms"}
        />
        <PropertyDetail
          unitIcon={<GiHomeGarage size={24} />}
          children={"1 Carport"}
        />
        <PropertyDetail
          unitIcon={<GiStairs size={24} />}
          children={"2 Floors"}
        />
      </div>
      <div className="flex items-center w-full ml-12">
        <Avatar
          source={"../../../../public/rheza.png"}
          name={"rheza"}
          classname="w-12 h-12 mr-4"
        />
        <div className="flex flex-col mr-14">
          <p className="text-primary-900 font-medium text-lg">Rheza</p>
          <p className="text-primary-400 font-medium text-base">
            Manager Director
          </p>
        </div>
        <GreenButton
          buttonIcon={<BsFillTelephoneFill />}
          children={"Contact Now"}
        />
      </div>
    </div>
  );
};
