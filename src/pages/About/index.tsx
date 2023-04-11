import React from "react";
import HeroAbout from "../../../src/assets/about.jpg";
import { Footer } from "../../components/organisms/Home/Footer";

interface CrewProps {
  crewName: string;
  role: string;
  image: string;
  alt: string;
}
export const About: React.FC = () => {
  return (
    <div className="h-[400vh] w-full">
      <div
        className="bg-cover bg-no-repeat w-full h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${HeroAbout})` }}
      >
        <h1 className="text-7xl text-green-1000 about-us font-bold">
          About Us
        </h1>
      </div>
      <section className="flex justify-center items-center px-20 h-80 mb-10">
        <p className="text-center text-primary-800 text-xl w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nostrum,
          at voluptatibus dicta reiciendis error. Laborum perspiciatis quos
          necessitatibus. Ipsam facere aspernatur magni modi fugit quam hic
          maxime magnam accusantium a cupiditate, vitae quod molestias, vel eos
          optio obcaecati quisquam repudiandae rem cumque alias voluptatibus
          dolor aut ut? Incidunt, quibusdam?
        </p>
      </section>
      <section className="behind-hounter flex flex-col items-center justify-center px-20 bg-green-1200 h-[800px] mb-20">
        <h2 className="text-primary-800 text-4xl font-semibold mb-8">
          Behind Hounter
        </h2>
        <div className="flex flex-wrap gap-14 items-center justify-center">
          <CrewCard
            image="https://househunter.vercel.app/rheza.png"
            alt="Rheza Ardi"
            crewName="Rheza Ardi"
            role="Founder"
          />
          <CrewCard
            image="https://househunter.vercel.app/rheza.png"
            alt="Rheza Ardi"
            crewName="Rheza Ardi"
            role="Founder"
          />
          <CrewCard
            image="https://househunter.vercel.app/rheza.png"
            alt="Rheza Ardi"
            crewName="Rheza Ardi"
            role="Founder"
          />
          <CrewCard
            image="https://househunter.vercel.app/rheza.png"
            alt="Rheza Ardi"
            crewName="Rheza Ardi"
            role="Founder"
          />
          <CrewCard
            image="https://househunter.vercel.app/rheza.png"
            alt="Rheza Ardi"
            crewName="Rheza Ardi"
            role="Founder"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-20 mb-20">
        <h2 className="text-primary-800 text-4xl font-semibold mb-8">
          Our Partnership
        </h2>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <img
            src="https://househunter.vercel.app/tiket.png"
            alt=""
            className="w-40"
          />
          <img
            src="https://househunter.vercel.app/traveloka.png"
            alt=""
            className="w-40"
          />
          <img
            src="https://househunter.vercel.app/airbnb.png"
            alt=""
            className="w-40"
          />
          <img
            src="https://househunter.vercel.app/trip-advisor.png"
            alt=""
            className="w-40"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-20">
        <h2 className="text-primary-800 text-4xl font-semibold mb-8">Awards</h2>
      </section>
      <Footer />
    </div>
  );
};

const CrewCard: React.FC<CrewProps> = ({ crewName, role, image, alt }) => {
  return (
    <div className="crew-card bg-green-1000 rounded-xl w-60 h-72 flex flex-col items-center justify-center">
      <img src={image} alt={alt} className="w-48 h-48 rounded-xl mb-2" />
      <p className="text-primary-800 font-medium text-xl">{crewName}</p>
      <p className="text-primary-400">{role}</p>
    </div>
  );
};
