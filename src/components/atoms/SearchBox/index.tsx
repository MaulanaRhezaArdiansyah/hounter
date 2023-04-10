import React, { useState, ReactNode } from "react";

interface Props {
  iconSearch: ReactNode;
  children: string;
  iconButtonSearch?: ReactNode;
  classname?: string;
  section?: string;
  widthButton?: string;
  placeholder: string;
}
export const SearchBox: React.FC<Props> = ({
  iconSearch,
  children,
  iconButtonSearch,
  classname,
  section,
  widthButton,
  placeholder,
}) => {
  const [focus, setFocus] = useState(false);
  const activeInput = () => {
    setFocus(!focus);
  };
  return (
    <form
      className={`border-2 ${
        focus
          ? "border-green-1200"
          : section === "email-subs"
          ? "border-white "
          : "border-[#E0E3EB]"
      }  rounded-full py-1 mb-7 flex items-center duration-150 ${classname}`}
    >
      <div className="ml-4">{iconSearch}</div>
      <input
        onFocus={activeInput}
        onBlur={activeInput}
        type="text"
        placeholder={placeholder}
        className={`mr-auto h-full w-full focus:outline-none bg-transparent ml-2`}
      />
      <button
        className={`bg-green-1200 flex justify-center items-center rounded-full mr-2 px-5 py-3 text-white hover:bg-green-1300 duration-150 ${widthButton}`}
      >
        <p>{children}</p>
        {iconButtonSearch}
      </button>
    </form>
  );
};
