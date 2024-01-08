import React from "react";

const SectionHeader = ({
  children,
  ...props
}: React.HTMLProps<HTMLHeadingElement> & { children: React.ReactNode }) => (
  <h2
    {...props}
    className="text-3xl mb-8 font-bold text-black capitalize text-center"
  >
    {children}
  </h2>
);

export default SectionHeader;
