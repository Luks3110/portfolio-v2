"use client";

import Skill from "./skill";
import SectionHeading from "./ui/section-header";
import { skillsData } from "@/utils/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </ul>
    </section>
  );
}
