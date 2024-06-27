import React from "react";
import Image from "next/image";

const HeroInfo = () => {
  return (
    <section className="bg-[#080305] mt-28 lg:mt-48 pb-20 lg:pb-32">
      <div className="">
        <Image
          src="/medic-patient-looking-human-body-analysis.jpg"
          alt=""
          width={1280}
          height={700}
          className="w-4/5 max-w-7xl mx-auto relative -top-10 lg:-top-24 rounded-3xl "
        />
      </div>
      <div className="lg:flex justify-between w-4/5 max-w-7xl mx-auto">
        <div className="mb-8 lg:mb-0">
          <h2 className="text-2xl lg:text-4xl text-white font-bold">
            Love By HealthCare across the nation
          </h2>
          <p className="text-[#3B3839] mt-3 text-sm lg:text-lg ">
            Empowering Small, Medium and Large Healthcare Providers with our EMS
            Software
          </p>
        </div>
        <div className="w-72"></div>
        <div className="flex items-start">
          <div className="flex mr-4">
            <h2 className="text-white text-4xl lg:text-5xl font-bold">85%</h2>
          </div>
          <div className="pl-4 border-l-2 border-[#3B3839]">
            <p className="text-[#3B3839] text-xs lg:text-base">
              Digital Transformations Initiative do not meet the Planned ROI
              without a proper adoption strategy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroInfo;
