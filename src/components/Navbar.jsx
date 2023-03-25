import React from "react";
import { motion } from "framer-motion";
import useStore from "../store";

function Navbar() {
  const theme = useStore((state) => state.theme);
  const changetheme = useStore((state) => state.switchTheme);
  return (
    <div className="shadow-md h-16 w-screen flex justify-between  items-center pr-10 sm:pl-14 sm:pr-14">
      <motion.h1 animate={{ x: 30 }} className="font-bold text-xl mr-5">
        Where in the world?
      </motion.h1>

      <button
        className=""
        onClick={() => {
          changetheme();
        }}
      >
        <i className="fa-solid fa-moon"></i> {theme ? <>Light</> : <>Dark</>}
        Mode
      </button>
    </div>
  );
}

export { Navbar };
