import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="lg:flex items-center justify-evenly bg-[#080305] text-white lg:mt-10 h-30 py-10 px-5 lg:px-0">
      <div className="flex items-center pb-8 lg:pb-0">
        <Image src="/logo.png" alt="" width={35} height={35} />
        <h3 className="text-lg ml-2">Omnihale</h3>
      </div>
      <div className="mb-6 lg:mb-0">
        <p>33 Marina Rd, Lagos Island</p>
      </div>
      <div>
        Email us at <span className="font-bold"> info@omnihale.com</span> or
        call/whatsapp
        <span className="font-bold"> 0 703 737 4411</span>
      </div>
    </footer>
  );
};

export default Footer;
