"use client";

import React from "react";
import SectionHeading from "./ui/section-header";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/utils/data";
import Experience from "./experience";

export default function Experiences() {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Experiences</SectionHeading>
      <VerticalTimeline lineColor="black">
        {experiencesData.map((item, index) => (
          <Experience key={index} {...item} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
