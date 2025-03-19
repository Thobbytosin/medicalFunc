/* eslint-disable react-hooks/rules-of-hooks */
// import { dummyDoctors } from "../../../app/constants/doctors";
import React, { FC, useState } from "react";
import DoctorCard from "./DoctorCard";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  KeyboardDoubleArrowLeftOutlinedIcon,
  KeyboardDoubleArrowRightOutlinedIcon,
} from "../../../app/icons/icons";
import Sidebar from "./Sidebar";

type Props = {
  page: number;
  setPage: (value: number) => void;
  handlePageChange: (value: number) => any;
  data: [];
};

const DoctorsGrid: FC<Props> = ({ page, setPage, handlePageChange, data }) => {
  const limit = 3;
  const skip = (page - 1) * limit;
  const totalPages = Math.ceil(data.length / limit);
  const pagesArray = [];

  const windowSize = 3;
  const [windowStart, setWindowStart] = useState(0);
  const windowEnd = windowStart + windowSize;

  for (let i = 1; i <= totalPages; i++) {
    pagesArray.push(i);
  }

  const handleNext = (pageNum: number) => {
    if (page < totalPages) {
      // check if page is not 1st page and last page
      const newPage = page + 1; // increase page by 1

      if (newPage > windowEnd) {
        // if page his greater than the window, update window start to the window end
        setWindowStart(windowEnd);
      }

      setPage(newPage);

      handlePageChange(Math.min(totalPages, pageNum + 1));
    }
  };

  const handlePrev = (pageNum: number) => {
    if (page > 1) {
      const newPage = page - 1;

      if (newPage <= windowStart) {
        setWindowStart(Math.max(0, windowStart - windowSize));
      }

      setPage(newPage);

      handlePageChange(Math.max(1, pageNum - 1));
    }
  };

  const handlePageNum = (pageNum: number) => {
    setPage(pageNum);

    handlePageChange(pageNum);

    // Adjust window dynamically if the page is clicked directly
    if (pageNum > windowEnd) {
      setWindowStart(windowStart + windowSize);
    } else if (pageNum <= windowStart) {
      setWindowStart(Math.max(0, windowStart - windowSize));
    }
  };

  return (
    <section className=" w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row gap-4 lg:gap-8 justify-between">
      <div className=" w-full md:w-[70%] h-fit">
        {data.slice(skip, skip + limit).map((doctor: any, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}

        {data.length ? (
          <div className=" my-10 flex justify-center items-center gap-2 mt-8 bg-white w-full py-3 rounded-md mx-auto">
            <button
              onClick={() => handlePrev(page)}
              disabled={page === 1}
              className={`mr-6 w-8 h-8 rounded-md  ${
                page === 1
                  ? "cursor-not-allowed border border-text-primary/20 text-text-primary/20"
                  : "cursor-pointer text-primary border border-text-primary/60"
              }`}
            >
              {page <= windowSize ? (
                <>
                  <ChevronLeftIcon />
                </>
              ) : (
                <>
                  <KeyboardDoubleArrowLeftOutlinedIcon />
                </>
              )}
            </button>

            {page > windowSize && (
              <div className=" text-primary text-xl">...</div>
            )}

            {pagesArray.slice(windowStart, windowEnd).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageNum(pageNum)}
                className={`rounded-md cursor-pointer flex justify-center items-center text-xs w-8 h-8 ${
                  page === pageNum
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-primary hover:text-white"
                }`}
              >
                {pageNum}
              </button>
            ))}

            {totalPages > windowSize && page < totalPages && (
              <div className=" text-primary text-xl">...</div>
            )}

            <button
              onClick={() => handleNext(page)}
              disabled={page === totalPages}
              className={` ml-6 w-8 h-8 rounded-md  ${
                page === totalPages
                  ? "cursor-not-allowed border border-text-primary/20 text-text-primary/20"
                  : "cursor-pointer text-primary border border-text-primary/60"
              }  `}
            >
              {page < totalPages && totalPages > windowSize * 2 ? (
                <KeyboardDoubleArrowRightOutlinedIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </button>
          </div>
        ) : null}
      </div>

      {/* SIDEBAR */}
      <div className=" w-full md:w-[30%] relative md:my-0 mb-12">
        <Sidebar />
      </div>
    </section>

    // <section className=" ">
    //   <div className=" flex justify-center items-center ">
    //     <div className=" grid grid-cols-4 gap-4  mb-10 transition-all duration-700">
    //       {data.slice(skip, skip + limit).map((doctor, index) => (
    //         <DoctorCard key={index} doctor={doctor} />
    //       ))}
    //     </div>
    //   </div>

    //   {data.length ? (
    //     <div className=" my-10 flex justify-center items-center gap-2 mt-8 bg-amber-100/50 max-w-fit px-8 shadow shadow-black/20 py-2 rounded-full mx-auto">
    //       <button
    //         onClick={() => handlePrev(page)}
    //         disabled={page === 1}
    //         className={`mr-6  ${
    //           page === 1
    //             ? "cursor-not- text-text-primary/20"
    //             : "cursor-pointer text-primary"
    //         }`}
    //       >
    //         {page <= windowSize ? (
    //           <>
    //             <ChevronLeftIcon />
    //           </>
    //         ) : (
    //           <>
    //             <KeyboardDoubleArrowLeftOutlinedIcon />
    //           </>
    //         )}
    //       </button>

    //       {page > windowSize && (
    //         <div className=" text-primary text-xl">...</div>
    //       )}

    //       {pagesArray.slice(windowStart, windowEnd).map((pageNum) => (
    //         <button
    //           key={pageNum}
    //           onClick={() => handlePageNum(pageNum)}
    //           className={`rounded-full flex justify-center items-center text-sm w-10 h-10 ${
    //             page === pageNum
    //               ? "bg-primary text-white"
    //               : "bg-gray-200 text-gray-700 hover:bg-primary hover:text-white"
    //           }`}
    //         >
    //           {pageNum}
    //         </button>
    //       ))}

    //       {totalPages > windowSize && page < totalPages && (
    //         <div className=" text-primary text-xl">...</div>
    //       )}

    //       <button
    //         onClick={() => handleNext(page)}
    //         disabled={page === totalPages}
    //         className={` ml-6 text-sm ${
    //           page === totalPages
    //             ? "cursor-not-allowed text-text"
    //             : "text-primary cursor-pointer"
    //         }  `}
    //       >
    //         {page < totalPages && totalPages > windowSize * 2 ? (
    //           <KeyboardDoubleArrowRightOutlinedIcon />
    //         ) : (
    //           <ChevronRightIcon />
    //         )}
    //       </button>
    //     </div>
    //   ) : null}
    // </section>
  );
};

export default DoctorsGrid;
