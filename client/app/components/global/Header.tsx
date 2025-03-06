import React, { useState } from "react";
import NavLaptop from "./navbar/NavLaptop";
import NavMobile from "./navbar/NavMobile";

type Props = {};

const Header = (props: Props) => {
  const [sticky, setSticky] = useState("top");

  // // for sticky
  // if (typeof window !== "undefined") {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 180) {
  //       setSticky(true);
  //     } else {
  //       setSticky(false);
  //     }
  //   });
  // }
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 220) {
        setSticky("show");
      } else if (window.scrollY > 0 && window.scrollY < 220) {
        setSticky("hide");
      } else if (window.scrollY === 0) {
        setSticky("top");
      }
    });
  }

  return (
    <header
      className={`fixed top-0 w-full left-0  transition-all duration-500  ${
        sticky === "top" && "shadow-none"
      } ${sticky === "hide" && "-translate-y-[6rem]"} ${
        sticky === "show" &&
        "-translate-y-0 bg-white shadow-md md:shadow-lg z-30"
      }`}
    >
      <NavLaptop />
      <NavMobile />
    </header>
  );
};

export default Header;
