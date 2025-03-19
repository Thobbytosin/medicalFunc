import React, { FC, useState } from "react";

type Props = {};

const Sidebar: FC<Props> = ({}) => {
  return (
    <aside className=" w-full min-h-fit  right-0 md:sticky -top-[100px]  ">
      <div className=" bg-white rounded-lg min-h-fit w-full mb-6 p-4">
        <h3 className=" text-text-primary font-medium text-xs lg:text-sm">
          Search by current location to see doctors near you
        </h3>
        <p className=" font-light text-[#787887] text-xs mt-2">
          You are seeing results from Lagos:
        </p>

        {/* // search results */}
        <p className="my-6 cursor-pointer font-normal text-xs bg-gray-200 text-text-primary block p-1">
          5 or more doctors found
        </p>

        <button
          type="button"
          disabled
          className=" cursor-not-allowed text-text-primary opacity-50 bg-gray-200 text-xs text-center lg:px-6 px-4 py-2 lg:py-3 rounded-sm mt-6 flex justify-self-end"
        >
          Yes, Search
        </button>
      </div>
      <div className=" bg-white h-[300px] p-4 rounded-lg">
        <div className=" bg-white w-full h-full bg-[url(../public//assets/banner.jpg)] bg-cover bg-center bg-no-repeat "></div>
      </div>
    </aside>
  );
};

export default Sidebar;
