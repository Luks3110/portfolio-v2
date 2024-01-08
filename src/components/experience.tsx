import { useTheme } from "@/context/theme-context";
import { experiencesData } from "@/lib/data";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type ExperienceProp = (typeof experiencesData)[number];

const Experience = (experience: ExperienceProp) => {
  const { theme } = useTheme();
  return (
    <React.Fragment>
      <VerticalTimelineElement
        contentStyle={{
          background:
            theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
          visibility: "visible",
        }}
        contentArrowStyle={{
          borderRight:
            theme === "light"
              ? "0.4rem solid #9ca3af"
              : "0.4rem solid rgba(255, 255, 255, 0.5)",
          visibility: "visible",
        }}
        textClassName="dark:text-white/75"
        date={experience.date}
        icon={experience.icon}
        iconStyle={{
          background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
          fontSize: "1.5rem",
          visibility: "visible",
        }}
      >
        <h3 className="font-semibold capitalize dark:text-gray-400">
          {experience.title}
        </h3>
        <p className="font-normal !mt-0 dark:text-gray-400">
          {experience.location}
        </p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
          {experience.description}
        </p>
      </VerticalTimelineElement>
    </React.Fragment>
  );
};

export default Experience;
