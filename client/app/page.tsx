"use client";

import CookiesConsent from "./components/global/CookiesConsent";
import Header from "./components/global/Header";
import PageHeading from "./components/global/PageHeading";
import Search from "./components/global/search/Search";
import Hero from "./components/home/Hero";
import { motion } from "framer-motion";

export interface LoginOptions {
  email: string;
  password: string;
}

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <>
      {/* FOR SEO */}
      <PageHeading
        title="Trust Healthcare - Quality Medical Care You Can Rely On"
        description="Trust Healthcare provides top-quality medical care, telemedicine services, and expert consultations. Book an appointment with our certified doctors today."
        keywords="healthcare, hospital, doctors, medical services, telemedicine, online consultation, patient care, Trust Healthcare"
        author="Trust Healthcare Team"
        ogTitle="Trust Healthcare - Your Trusted Medical Partner"
        ogDescription="Get the best medical services, telemedicine consultations, and expert healthcare solutions at Trust Healthcare."
        ogImage="/logo.png"
        ogUrl="https://trusthealthcare.com"
        twitterCard="summary_large_image"
      />

      <Header />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Hero />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Search />
      </motion.div>

      <div className=" w-full h-[10000px]" />
      {/* cookies consent */}
      <CookiesConsent />
    </>
  );
}
