'use client';

import GKC from "@/components/OurServices/GKC";
import KeyTrainingAreas from "@/components/OurServices/KeyTrainingAreas";
import TalentProcess from "@/components/OurServices/TalentProcess";
import TSC from "@/components/OurServices/TSC";
import WhoToTrain from "@/components/OurServices/WhoToTrain";
import React from "react";

const ServicesSectionContainer = () => {
  return (
    <>
      <TSC />
      <GKC />
      <TalentProcess />
      <KeyTrainingAreas />
      <WhoToTrain />
    </>
  );
};

export default ServicesSectionContainer;
