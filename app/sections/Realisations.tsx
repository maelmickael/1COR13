"use client";

import React from "react";
import Realise from "./Realise";
import About from "./About";
import Footer from "../components/footer/Footer";

const Realisations = () => {


  return (
    <>
      <div className="realisations mt-20">
        <div className="innerRealisation w-full max-w-5xl mx-auto py-8">
          <h1 className="uppercase text-[60px] leading-[60px] font-[600] text-[#0B253C]">
            Nos <br /> réalisations
          </h1>
          <div className="trait h-[8px] w-[70px] bg-[#FE0466] mt-1"></div>
        </div>

        <Realise />
      </div>
    </>
  );
};

export default Realisations;