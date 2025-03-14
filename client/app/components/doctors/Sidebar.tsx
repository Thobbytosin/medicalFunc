import React, { useState } from "react";

type Props = {};

const medicalSpecialists = [
  { title: "General Physician" },
  { title: "Cardiologist" },
  { title: "Neurologist" },
  { title: "Orthopedic Surgeon" },
  { title: "Pediatrician" },
  { title: "Dermatologist" },
  { title: "Oncologist" },
  { title: "Psychiatrist" },
  { title: "Gynecologist" },
  { title: "Endocrinologist" },
  { title: "Gastroenterologist" },
];

const Sidebar = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <aside className=" w-[20%] h-fit top-[100px] left-0 sticky   ">
      <ul className=" h-full ">
        {medicalSpecialists.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-full p-2  rounded-md cursor-pointer transition-all duration-700 hover:bg-primary hover:text-white text-text-primary text-sm font-light ${
              activeIndex === index ? "bg-primary text-white" : ""
            } ${index === medicalSpecialists.length - 1 ? "mb-0" : "mb-2"}`}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
