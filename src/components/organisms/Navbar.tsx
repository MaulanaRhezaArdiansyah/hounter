import React, { useEffect, useState } from "react";
import { Logo } from "../atoms/Logo";
import { NavLink } from "../atoms/NavLink";
import { DropdownNav, PropertyDropdown2 } from "../molecules/DropdownNav";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [colorNav, setColorNav] = useState(false);
  const [showDropdownNav, setShowDropdownNav] = useState(false);
  const [showPropertyDropdown2, setShowPropertyDropdown2] = useState(false);
  const navigate = useNavigate();

  const changeColorNavbar = () => {
    if (window.scrollY >= 56) {
      setColorNav(true);
    } else {
      setColorNav(false);
    }
  };
  window.addEventListener("scroll", changeColorNavbar);

  const showDropdownFunc = () => {
    setShowDropdownNav(!showDropdownNav);
  };

  return (
    <>
      <nav
        className={`${
          colorNav ? "bg-green-1200/80 backdrop-blur-sm" : "bg-transparent"
        } flex items-center justify-between px-20 h-14 md:h-24 fixed left-0 right-0 duration-200 ease-in-out z-30`}
      >
        <Logo />
        <div
          onClick={() => {
            showDropdownFunc();
          }}
          className="flex flex-col gap-1 md:hidden cursor-pointer"
        >
          <span className="w-10 h-1 bg-white rounded-full"></span>
          <span className="w-10 h-1 bg-white rounded-full"></span>
          <span className="w-10 h-1 bg-white rounded-full"></span>
        </div>
        <div className="flex items-center max-md:hidden gap-14">
          <div className="flex items-center gap-6">
            <div onClick={() => navigate("/about")}>
              <NavLink colorNav={colorNav}>About Us</NavLink>
            </div>
            <div onClick={() => navigate("/article")}>
              <NavLink colorNav={colorNav}>Article</NavLink>
            </div>
            <div
              onClick={() => setShowPropertyDropdown2(!showPropertyDropdown2)}
            >
              <NavLink colorNav={colorNav}>Property</NavLink>
            </div>
          </div>
          <button className="bg-green-1000 text-green-1300 px-5 py-3 rounded-full font-[600] hover:bg-green-1300 hover:text-green-1000 duration-150">
            Sign Up!
          </button>
        </div>
      </nav>
      {showDropdownNav ? (
        <DropdownNav
          showDropdownNav={showDropdownNav}
          setShowDropdownNav={setShowDropdownNav}
        />
      ) : (
        <></>
      )}
      {showPropertyDropdown2 ? (
        <PropertyDropdown2
          showPropertyDropDown2={showPropertyDropdown2}
          setShowPropertyDropDown2={setShowPropertyDropdown2}
        />
      ) : (
        <></>
      )}
    </>
  );
};
