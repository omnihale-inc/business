import React from "react";
import Link from "next/link";

import HeroInfo from "./HeroInfo";

const Hero = () => {
  return (
    <>
      <section className="mt-20 lg:mt-32 w-4/5 max-w-5xl mx-auto items-center justify-between">
        <div className="mb-5">
          <h2 className="text-lg lg:text-2xl text-center font-semibold text-[#17D694]">
            Welcome to Omnihale
          </h2>
        </div>
        <div className="mb-5">
          <h2 className="text-3xl lg:text-7xl text-center font-bold">
            Transform Your Healthcare Delivery
          </h2>
        </div>
        <div>
          <h2 className="text-xs lg:text-base text-center">
            With intuitive interfaces, robust data security, and powerful
            analytics, our EMS solution empowers medical professionals to focus
            on what truly matters—delivering exceptional patient care.
            Experience the future of healthcare management and improve outcomes
            with our EMS platform.
          </h2>
        </div>
        <div>
          <div className="border border-b rounded-full p-1 border-[#CCF6E6] w-fit mx-auto mt-10">
            <Link href="#demo">
              <button className="bg-gradient-to-r from-[#17D694] to-[#04B6A7] w-40 h-12 rounded-full text-white font-bold p-2">
                Request A Demo
              </button>
            </Link>
          </div>
        </div>
      </section>
      <HeroInfo />
    </>
  );
};

export default Hero;
