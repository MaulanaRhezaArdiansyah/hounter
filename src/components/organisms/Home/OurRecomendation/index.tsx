import React, { useState } from "react";
import { FeaturedCard } from "../../../molecules/FeaturedCard";
import { FeaturedSectionButtons } from "../../../molecules/FeaturedSectionButtons";

export const OurRecomendation: React.FC = () => {
  const [active, setActive] = useState("House");

  return (
    <div id="recommendation" className="pl-20 pt-32 flex flex-col">
      <FeaturedSectionButtons active={active} setActive={setActive} />
      <FeaturedCard active={active} setActive={setActive} />
    </div>
  );
};
