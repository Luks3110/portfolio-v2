"use client";
import React, { useEffect, useRef } from "react";
import SectionHeader from "./ui/section-header";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";

function About() {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathname === "#about" && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [pathname]);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 0.5"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[40rem] text-center leading-8 sm:mb-40"
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <SectionHeader>About me</SectionHeader>
      <p className="text-center text-2xl sm:text-xl mb-4 font-medium dark:text-gray-400">
        I&apos;m passionate about computers since I was a kid. Building PCs for
        gaming with my dad was my favorite hobbie, since then this passion grew
        year by year, and I had my first experience with scripting in Team
        Fortress 2. I went from creating configs to my classes to programming
        embedded systems with PIC coding in C. Then I started my bachelor, my
        college was not meeting my expectations, so I dropped college and became
        a self-taught developer, and that was the point where I really begin to
        improve faster in web development.
      </p>
      <p className="text-center text-2xl sm:text-xl mb-4 font-medium dark:text-gray-400">
        Right now I&apos;m working as a Full-Stack Developer at Arbo Imóveis, a
        startup that helps real-estate companies and brokers to sell more,
        attract more leads, manage their sales seamlessly and have a beautiful
        fully featured website that is a whitelabel that we developed, where
        I&apos;m a code owner and develop most of the core features.{" "}
      </p>
    </motion.section>
  );
}

export default About;
