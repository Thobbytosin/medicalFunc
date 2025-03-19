"use client";

import React, { useEffect, useState } from "react";
import DoctorsGrid from "./DoctorsGrid";
import RevealWrapper, { fadeInDown } from "../global/RevealWrapper";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { dummyDoctors } from "../../constants/doctors";
import { DoneOutlinedIcon } from "../../icons/icons";

import DoctorCard, { Doctor } from "./DoctorCard";
import SearchHeader from "../global/search/SearchHeader";

type Props = {};

export interface SearchForm {
  location?: string;
  parameter?: string;
}

const FindDoctors = (props: Props) => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const [activeSpecialization, setActiveSpecialization] =
    useState("General Physician");
  const [page, setPage] = useState<number>(1);
  const [doctorsData, setDocotorsData] = useState<any>(dummyDoctors);
  const initalSearchFormValues = { location: "", parameter: "" };
  const [searchForm, setSearchForm] = useState<SearchForm>(
    initalSearchFormValues
  );
  const [showOptions, setShowOptions] = useState(false);
  const [filterValue, setFilterValue] = useState("All");
  const [sortValue, setSortValue] = useState("Latest");
  const [showSortOptions, setShowSortOptions] = useState(false);

  useEffect(() => {
    // check if url has params
    const urlHasParams =
      params.get("filter") || params.get("keyword") || params.get("page");

    if (!urlHasParams) {
      const query = new URLSearchParams({
        filter: activeSpecialization.toLowerCase(),
        page: page.toString(),
        keyword: "doctors",
      });

      router.replace(`${pathname}?${query.toString()}`);
    }
  }, [router, params, pathname, activeSpecialization, page]);

  const handleFilterChange = (newFilter: string) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("filter", newFilter.toLowerCase());

    router.push(`${pathname}?${newParams}`);

    // handle the specialization change
    const filteredData = dummyDoctors.filter(
      (data) => data.specialization === newFilter
    );
    if (newFilter === "General Physician") {
      setDocotorsData(dummyDoctors);
    } else {
      setDocotorsData(filteredData);
    }
  };

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("page", newPage.toString());

    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <section className=" bg-gray-200">
      <RevealWrapper key={"find-doctors"} variants={fadeInDown} animate>
        {/* blue header */}
        <div className=" bg-primary h-[80px] md:h-[100px] w-full mt-20 rounded-b-xl" />
        {/* SEARCH HEADER */}
        <SearchHeader
          key={"search-header"}
          filterValue={filterValue}
          searchForm={searchForm}
          setFilterValue={setFilterValue}
          setSearchForm={setSearchForm}
          setShowOptions={setShowOptions}
          setShowSortOptions={setShowSortOptions}
          setSortValue={setSortValue}
          showOptions={showOptions}
          showSortOptions={showSortOptions}
          sortValue={sortValue}
        />

        {/* display search info */}
        <div className=" my-8 w-[90%] lg:w-[80%] mx-auto">
          <h2 className=" text-text-primary text-center md:text-left text-lg md:text-xl font-medium">
            42 doctors available in Ojodu Berger, Lagos.
          </h2>
          <p className="text-[#787887] max-w-[80%] md:min-w-full mx-auto  md:text-left text-center font-light mt-1 text-xs md:text-sm flex items-center gap-2">
            <span className="hidden md:w-[18px] md:h-[18px] rounded-full border border-[#787887] text-xs md:text-sm md:flex justify-center items-center">
              <DoneOutlinedIcon fontSize="inherit" />
            </span>
            <span>
              Book appointments with minimum wait-time & verified doctor details
            </span>
          </p>
        </div>

        {/* doctors data */}
        <DoctorsGrid
          page={page}
          setPage={setPage}
          data={doctorsData}
          handlePageChange={handlePageChange}
        />
      </RevealWrapper>
    </section>
  );
};

export default FindDoctors;
