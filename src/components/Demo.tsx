import Image from "next/image";
import React from "react";

const Demo = () => {
  return (
    <section
      className="w-5/5 max-w-7xl mx-auto mt-32 lg:mt-72 overflow-hidden lg:overflow-visible h-[590px] lg:h-[485px]"
      id="demo"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#17D694] to-[#04B6A7] rounded-3xl h-[500px] lg:h-[400px] w-4/5 mx-auto lg:w-fit">
        <div className="max-w-[550px] p-10 lg:p-0 lg:pl-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5">
            Let&apos;s make simply your EMS adoption
          </h2>
          <p className="text-white text-sm lg:text-base mb-4">
            We understand the challenges of integrating new technology into your
            operations, which is why our demo is designed to be straightforward
            and informative. Join us for a demo today and see how easy it can be
            to elevate your Healthcare operations.
          </p>
          <p className="text-white">
            Email us at <span className="font-black">demo@omnihale.com</span>
          </p>
        </div>
        <div>
          <Image
            src="/demo-img.png"
            height={60}
            width={900}
            alt=""
            className="relative left-16 lg:left-0 top-[-15px] lg:top-[-43px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Demo;
