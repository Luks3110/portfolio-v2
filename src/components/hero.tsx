"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Icon from "./ui/icon";

function Hero() {
  return (
    <section
      id="hero"
      className="pt-1 sm:pt-20 mb-15 text-center sm:mb:0 sm:max-w-[60vw]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Image src="/hero2.png" width={300} height={300} alt="Hero image" />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 !leading-[1.5] text-2xl px-4 font-medium sm:text-2xl sm:max-w-[40rem] dark:text-white/75"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {" "}
        <span className="font-bold">Hi, I&apos;m Lucas.</span> I&apos;m a
        <span className="font-bold"> Full-Stack Software Engineer</span> from{" "}
        <span className="font-bold">Brazil</span>, working to make people&apos;s
        life easier with{" "}
        <span className="font-bold">
          cloud-native, scalable, reliable and quality-focused software
        </span>
        , that solves <span className="font-bold"> real-world problems</span>,
        in companies at any scale.
      </motion.h1>

      <motion.div
        className="flex items-center justify-center gap-5"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}>
          <Link
            href="#contact"
            className="bg-gray-900 text-white px-12 py-3 rounded-full font-bold border border-black/10 shadow-lg shadow-black/[0.4]"
          >
            Contact me
          </Link>
        </motion.div>
        <motion.a
          href="/Resume.pdf"
          className="flex justify-betweeny bg-sky-300 px-8 py-3 text-white rounded-full font-bold gap-2 border border-black/10 shadow-lg shadow-black/[0.4]"
          download
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <div>
            <Icon name="Download" />
          </div>
          <p>Resume</p>
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
