"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Root,
  List,
  Item,
  Trigger,
  Content,
} from "@radix-ui/react-navigation-menu";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import Icon from "./icon";
import { MenuButton } from "./menuButton";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const headerRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (headerRef.current?.contains(e.target as Node)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="z-[999] fixed sm:hidden w-full flex" ref={headerRef}>
      <div className="flex w-full">
        <div className="w-[90%] flex flex-col">
          <Root>
            <List>
              <Item className={`h-[100dvh] absolute`}>
                <Trigger className="pl-3 py-3 absolute z-10">
                  <MenuButton
                    isOpen={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                    color={isOpen ? "#fff" : "#000"}
                  />
                </Trigger>
                <motion.div
                  className={`fixed top-0 pt-8 left-0 w-[40vw] h-full z-9 ${
                    isOpen
                      ? "bg-[#777B8C] transform transition-transform duration-500 ease-in-out"
                      : "bg-transparent -translate-x-full"
                  }`}
                >
                  <Content>
                    <ul>
                      {links.map((link) => (
                        <motion.li
                          className="flex items-left justify-start relative"
                          key={link.hash}
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ y: -100 }}
                        >
                          <Link
                            className="flex text-xl text-white items-left justify-start px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
                            href={link.hash}
                          >
                            {link.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </Content>
                </motion.div>
              </Item>
            </List>
          </Root>
        </div>
        <div className="w-[20%] py-2 pr-2">
          <ul className="flex gap-1">
            <motion.li
              className="bg-zinc-800 p-1 border rounded-full shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            >
              <div>
                <a href="https://github.com/Luks3110" target="blank">
                  <Icon name={"Github"} color="white" />
                </a>
              </div>
            </motion.li>
            <motion.li
              className="bg-[#0A66C2] p-1 border rounded-full"
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            >
              <a href="https://linkedin.com/in/Luks3110" target="blank">
                <Icon name={"Linkedin"} color="white" />
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </header>
  );
}
