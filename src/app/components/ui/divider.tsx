"use client";
import React from "react";
import { motion } from "framer-motion";

function Divider() {
  return (
    <motion.div
      className="bg-gray-900 my-28 h-16 w-1 rounded-full hidden sm:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    ></motion.div>
  );
}

export default Divider;
