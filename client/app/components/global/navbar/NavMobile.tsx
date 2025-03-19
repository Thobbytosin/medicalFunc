import Link from "next/link";
import { styles } from "../../../styles/styles";
import React, { FC, useRef, useState } from "react";
import Image from "next/image";
import { CloseIcon, MenuIcon } from "../../../icons/icons";

type Props = {
  setOpenModal: (value: boolean) => void;
  setMode: (value: string) => void;
};

const menuItems = [
  { name: "Home", link: "/" },
  {
    name: "Services",
    hasSubmenu: true,
  },
  { name: "Consultation", link: "/services/consultation" },
  { name: "Medical Checkup", link: "/services/medical-check-up" },

  { name: "Find Doctors", link: "/find-doctors" },
  { name: "Contact", link: "/contact" },
];

const NavMobile: FC<Props> = ({ setMode, setOpenModal }) => {
  const [openSidebar, setOpenSidebar] = useState<any>(undefined);
  const [openSubmenu, setOpenSubmenu] = useState<any>(false);

  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  return (
    <nav
      aria-label="main navigation"
      className={`md:hidden flex ${styles.paddingX} ${styles.paddingY} w-full justify-between items-center font-poppins`}
    >
      {/* logo */}
      <Link
        title="Trust HealthCare"
        href={"/"}
        className=" flex items-center gap-2"
      >
        <Image
          src={"/logo.png"}
          alt="trust_healthcare_logo"
          width={20}
          height={20}
        />
        <h1 className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold">
          <span className=" text-primary ">Trust</span> HealthCare
        </h1>
      </Link>
      <div></div>
      <button
        title="Menu"
        className=" cursor-pointer"
        onClick={() => setOpenSidebar(true)}
      >
        <MenuIcon fontSize="medium" />
      </button>

      {/* SIDEBAR SHOULD SHOW ONLY WHEN TOGGLE */}
      {/* mobile sidebar */}

      <div
        id="sidebar"
        className={`fixed w-full min-h-screen top-0 left-0 z-[9999] transition-all duration-500 bg-black/40  ${
          openSidebar ? "-translate-y-[0%]" : "-translate-y-[100%]"
        }`}
      >
        <div className=" w-full flex flex-col justify-between fixed right-0 top-0  bg-white z-[999999] min-h-[50%] py-6">
          <div>
            <div className=" mb-8 ml-6 w-full pr-12 flex justify-between items-center">
              {/* logo */}
              <Link
                title="Trust HealthCare"
                href={"/"}
                className=" flex items-center gap-2"
              >
                <Image
                  src={"/logo.png"}
                  alt="trust_healthcare_logo"
                  width={20}
                  height={20}
                />
                <h1 className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold">
                  <span className=" text-primary ">Trust</span> HealthCare
                </h1>
              </Link>

              <button
                type="button"
                title="Close"
                className="bg-red-500 cursor-pointer w-6 h-6 rounded-lg text-white flex justify-center items-center"
                onClick={handleCloseSidebar}
              >
                <CloseIcon fontSize="small" />
              </button>
            </div>

            {/* NAV LIST */}

            <ul
              className={`flex flex-col md:hidden items-center  cursor-pointer  `}
            >
              {menuItems.map((item, index) =>
                item.hasSubmenu ? (
                  <li
                    key={index}
                    className="focus:outline-none relative w-full text-center hover:bg-secondary  duration-300 transition-all hover:text-white py-3 font-medium"
                  >
                    <button
                      title="Services"
                      aria-haspopup="true"
                      aria-expanded={openSubmenu}
                      onClick={() => setOpenSubmenu(!openSubmenu)}
                      className=" w-full flex justify-center items-center cursor-pointer "
                    >
                      Services
                      <svg
                        className="w-4 h-4 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                ) : (
                  <li
                    key={index}
                    className={`w-full text-center  hover:bg-secondary  hover:text-white transition-all ${
                      (index === 2 && openSubmenu === false) ||
                      (index === 3 && openSubmenu === false)
                        ? "hidden"
                        : null
                    }  ${
                      (index === 2 && openSubmenu === true) ||
                      (index === 3 && openSubmenu === true)
                        ? " text-gray-600 text-sm py-2"
                        : "font-medium py-3"
                    }`}
                    onClick={handleCloseSidebar}
                  >
                    <Link
                      href={item.link as string}
                      title={item.name}
                      className={`focus:outline-none transition-all `}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <button
            onClick={() => {
              setOpenSidebar(false);
              setOpenModal(true);
              setMode("login");
            }}
            className=" my-10 py-2 bg-primary text-white px-10 rounded-lg mx-auto w-fit cursor-pointer transition-all duration-700 hover:bg-transparent hover:text-primary hover:border hover:border-primary"
          >
            Sign In
          </button>

          <p className=" mt-6 ml-6 text-xs text-black  text-start">
            &copy; {new Date().getFullYear()} Trust HealthCare, All Rights
            Reserved
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavMobile;
