import React from "react";
import { motion } from "framer-motion";
import useStore from "../store";

function Navbar() {
  const changetheme = useStore((state) => state.switchTheme);
  return (
    <div className="shadow-md h-16 w-screen flex justify-between  items-center pl-10 pr-10 sm:pl-14 sm:pr-14r  ">
      <motion.h1 animate={{ x: 30 }} className="font-bold text-xl ">
        Where in the world?
      </motion.h1>

      <button
        className=""
        onClick={() => {
          changetheme();
        }}
      >
        <i className="fa-solid fa-moon"></i> Dark Mode
      </button>
    </div>
  );
}

export { Navbar };
