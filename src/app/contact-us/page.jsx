"use client";

import { useEffect } from "react";
import AOS from "aos";
import ContactPage from "@/components/ContactUs/ContactPage";

export default function Contact() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <div className="pt-[5rem]">
        <ContactPage />
      </div>
    </>
  );
}