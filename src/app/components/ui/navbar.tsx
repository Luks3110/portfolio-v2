"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import Icon from "./icon";

export default function Navbar() {
  return (
    <header className="z-[999] relative hidden sm:block">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -70, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
          <motion.li
            className="bg-zinc-800 p-1 border rounded-full shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] hover:transfor"
            initial={{ y: -45, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          >
            <a href="https://github.com/Luks3110" target="blank">
              <Icon name={"Github"} color="white" />
            </a>
          </motion.li>
          <motion.li
            className="bg-sky-400 p-1 border rounded-full"
            initial={{ y: -45, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          >
            <a href="https://linkedin.com/in/Luks3110" target="blank">
              <Icon name={"Linkedin"} color="white" />
            </a>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
