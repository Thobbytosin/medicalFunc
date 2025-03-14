import { dummyDoctors } from "@/app/constants/doctors";
import React from "react";
import DoctorCard from "./DoctorCard";

type Props = {};

const DoctorsGrid = (props: Props) => {
  return (
    <section className=" grid grid-cols-4 gap-4 max-w-full mb-10">
      {dummyDoctors.map((doctor, index) => (
        <DoctorCard key={index} doctor={doctor} />
      ))}
    </section>
  );
};

export default DoctorsGrid;
