"use client";

import React from "react";
import Sidebar from "./Sidebar";
import { styles } from "../../../app/styles/styles";
import DoctorsGrid from "./DoctorsGrid";
import RevealWrapper from "../global/RevealWrapper";

type Props = {};

// Animation Variants
const fadeInDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const DoctorsClient = (props: Props) => {
  return (
    <RevealWrapper variants={fadeInDown} animate>
      <main className={`${styles.mainSection} min-h-fit w-full flex gap-20`}>
        <Sidebar />

        <DoctorsGrid />
      </main>
    </RevealWrapper>
  );
};

export default DoctorsClient;
