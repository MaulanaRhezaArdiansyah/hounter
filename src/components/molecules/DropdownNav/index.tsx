import React, { useState, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
// import HashLink from 'react-hash-link'
import { HashLink as Link } from "react-router-hash-link";
interface Props {
  showDropdownNav: boolean;
  setShowDropdownNav: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props2 {
  showDropdownNav: boolean;
  setShowDropdownNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropdownNav: React.FC<Props> = ({
  showDropdownNav,
  setShowDropdownNav,
}) => {
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div
        // onClick={() => setShowDropdownNav(false)}
        className="inset-0 bg-transparent fixed"
      >
        <div className="bg-green-300 rounded-xl w-36 h-40 fixed top-16 right-8 flex flex-col items-start justify-center gap-1 p-2">
          <p
            onClick={() => {
              navigate("/about");
              setShowDropdownNav(!showDropdownNav);
            }}
            className="hover:bg-green-1200 w-full py-2 px-2 rounded-xl cursor-pointer"
          >
            About Us
          </p>
          <p
            onClick={() => {
              navigate("/article");
              setShowDropdownNav(!showDropdownNav);
            }}
            className="hover:bg-green-1200 w-full py-2 px-2 rounded-xl cursor-pointer"
          >
            Article
          </p>
          <div
            onClick={() => setShowPropertyDropdown(!showPropertyDropdown)}
            className="flex items-center justify-between hover:bg-green-1200 w-full py-2 px-2 rounded-xl cursor-pointer"
          >
            <p>Property</p>
            <RiArrowDropDownLine size={24} />
          </div>
        </div>
      </div>
      {showPropertyDropdown ? (
        //   showDropdownNav: boolean;
        <PropertyDropdown
          showDropdownNav={showDropdownNav}
          setShowDropdownNav={setShowDropdownNav}
        />
      ) : (
        <></>
      )}
    </>
  );
};

const PropertyDropdown: React.FC<Props2> = ({
  setShowDropdownNav,
  showDropdownNav,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-green-300 rounded-xl w-36 h-40 fixed top-60 right-20 flex flex-col items-start justify-center gap-1 p-2">
      <Link
        to={"/#recommendation"}
        smooth
        onClick={() => {
          // navigate("/");
          setShowDropdownNav(!showDropdownNav);
        }}
        className="hover:bg-green-1200 w-full py-2 px-2 rounded-xl cursor-pointer"
      >
        House
      </Link>
      <Link
        to={"/#recommendation"}
        smooth
        onClick={() => {
          // navigate("/");
          setShowDropdownNav(!showDropdownNav);
        }}
        className="hover:bg-green-1200 w-full py-2 px-2 rounded-xl cursor-pointer"
      >
        Villa
      </Link>
      <Link
        to={"/#recommendation"}
        smooth
        onClick={() => {
          // navigate("/");
          setShowDropdownNav(!showDropdownNav);
        }}
        className="hover:bg-green-1200 w-full py-2 px-2 rounded-xl cursor-pointer"
      >
        Apartment
      </Link>
    </div>
  );
};

interface Props3 {
  showPropertyDropDown2: boolean;
  setShowPropertyDropDown2: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PropertyDropdown2: React.FC<Props3> = ({
  setShowPropertyDropDown2,
  showPropertyDropDown2,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-green-300 rounded-xl w-36 h-40 fixed top-20 right-40 flex flex-col items-start justify-center gap-1 p-2 z-30">
      <Link
        to={"/#recommendation"}
        smooth
        onClick={() => {
          navigate("/");
          setShowPropertyDropDown2(!showPropertyDropDown2);
        }}
        className="hover:bg-green-1200 text-green-1300 hover:text-white w-full py-2 px-2 rounded-xl cursor-pointer"
      >
        House
      </Link>
      <Link
        to={"/#recommendation"}
        smooth
        onClick={() => {
          navigate("/");
          setShowPropertyDropDown2(!showPropertyDropDown2);
        }}
        className="hover:bg-green-1200 text-green-1300 hover:text-white w-full py-2 px-2 rounded-xl cursor-pointer"
      >
        Villa
      </Link>
      <Link
        to={"/#recommendation"}
        smooth
        onClick={() => {
          navigate("/#recommendation");
          // navigate("/");
          setShowPropertyDropDown2(!showPropertyDropDown2);
        }}
        className="hover:bg-green-1200 text-green-1300 hover:text-white w-full py-2 px-2 rounded-xl cursor-pointer"
      >
        Apartment
      </Link>
    </div>
  );
};
