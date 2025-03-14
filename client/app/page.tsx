import CookiesConsent from "./components/global/CookiesConsent";
import Header from "./components/global/Header";
import Search from "./components/global/search/Search";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import MeetDoctors from "./components/home/MeetDoctors";
import Testimonials from "./components/home/Testimonials";
import VideoSection from "./components/home/VideoSection";
import NewsLetter from "./components/home/NewsLetter";
import Footer from "./components/global/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust Healthcare - Quality Medical Care You Can Rely On",
  description:
    "Trust Healthcare provides top-quality medical care, telemedicine services, and expert consultations. Book an appointment with our certified doctors today.",
  keywords:
    "healthcare, hospital, doctors, medical services, telemedicine, online consultation, patient care, Trust Healthcare",
  icons: {
    icon: "/logo.png", //Path relative to /public
    shortcut: "/logo.png",
  },
  authors: [{ name: "Trust Healthcare Team" }],
  alternates: {
    canonical: "https://trusthealthcare.com",
  },
  openGraph: {
    title: "Trust Healthcare - Your Trusted Medical Partner",
    description:
      "Get the best medical services, telemedicine consultations, and expert healthcare solutions at Trust Healthcare.",
    url: "https://trusthealthcare.com",
    siteName: "Trust Healthcare",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Trust Healthcare Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust Healthcare - Your Trusted Medical Partner",
    description:
      "Get the best medical services, telemedicine consultations, and expert healthcare solutions at Trust Healthcare.",
    images: ["/logo.png"],
  },
  metadataBase: new URL("https://trusthealthcare.com"),
};

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Search />

      <Services />

      <MeetDoctors />

      <Testimonials />

      <VideoSection />

      <NewsLetter />

      <Footer />

      {/* cookies consent */}
      <CookiesConsent />
    </>
  );
}
