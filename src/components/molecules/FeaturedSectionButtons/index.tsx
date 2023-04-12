import React, { useState } from "react";
import { SectionCategory } from "../../atoms/SectionCategory";
import { SectionTitle } from "../../atoms/SectionTitle";
import { CategoryButton } from "../../atoms/CategoryButton";
import { HiHome } from "react-icons/hi";
import { MdApartment, MdVilla } from "react-icons/md";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

interface Props {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}
export const FeaturedSectionButtons: React.FC<Props> = ({
  active,
  setActive,
}) => {
  return (
    <div className="flex justify-between mb-5">
      <div>
        <SectionCategory>Our Recommendation</SectionCategory>
        <SectionTitle>Featured House</SectionTitle>
      </div>
      <div className="flex items-center gap-5">
        <button onClick={() => setActive("House")}>
          <CategoryButton
            classnameCondition={
              active === "House"
                ? "bg-green-1000 border-green-1000 text-green-1200"
                : "bg-white border-primary-400 text-primary-400"
            }
            categoryLogo={<HiHome size={22} />}
            children={"House"}
          />
        </button>
        <button onClick={() => setActive("Villa")}>
          <CategoryButton
            classnameCondition={
              active === "Villa"
                ? "bg-green-1000 border-green-1000 text-green-1200"
                : "bg-white border-primary-400 text-primary-400"
            }
            categoryLogo={<MdVilla size={22} />}
            children={"Villa"}
          />
        </button>
        <button onClick={() => setActive("Apartment")}>
          <CategoryButton
            classnameCondition={
              active === "Apartment"
                ? "bg-green-1000 border-green-1000 text-green-1200"
                : "bg-white border-primary-400 text-primary-400"
            }
            categoryLogo={<MdApartment size={22} />}
            children={"Apartment"}
          />
        </button>
      </div>
      <div className="flex items-center gap-3 pr-20">
        <button className="bg-green-1200 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-1300 duration-150">
          <FiChevronLeft size={22} />
        </button>
        <button className="bg-green-1200 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-1300 duration-150">
          <FiChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};
