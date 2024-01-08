"use client";
import React from "react";
import { motion } from "framer-motion";

function Divider() {
  return (
    <motion.div
      className="bg-gray-900 my-20 h-16 sm:my-28 sm:h-16 w-1 rounded-full "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    ></motion.div>
  );
}

export default Divider;
