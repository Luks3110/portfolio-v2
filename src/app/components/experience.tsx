import { experiencesData } from "@/lib/data";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type ExperienceProp = (typeof experiencesData)[number];

const Experience = (experience: ExperienceProp) => {
  return (
    <React.Fragment>
      <VerticalTimelineElement
        contentStyle={{
          background: "#f3f4f6",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
          visibility: "visible",
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #9ca3af",
          visibility: "visible",
        }}
        date={experience.date}
        icon={experience.icon}
        iconStyle={{
          background: "white",
          fontSize: "1.5rem",
          visibility: "visible",
        }}
      >
        <h3 className="font-semibold capitalize">{experience.title}</h3>
        <p className="font-normal !mt-0">{experience.location}</p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
          {experience.description}
        </p>
      </VerticalTimelineElement>
    </React.Fragment>
  );
};

export default Experience;
