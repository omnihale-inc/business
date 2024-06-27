import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex mt-8  mb-28 lg:mb-40 w-4/5 max-w-7xl mx-auto items-center justify-between">
      <div className="flex items-center">
        <Image src="/logo.png" alt="" width={35} height={35} />
        <h3 className="text-lg ml-2">Omnihale</h3>
      </div>
      <ul className="flex">
        <Link href="#pricing">
          <li className="mr-4 font-medium">Pricing</li>
        </Link>
        <Link href="#about">
          <li className="font-medium">About</li>
        </Link>
      </ul>
      <div>
        <div className="hidden lg:block border border-b rounded-full p-1 border-[#CCF6E6] w-fit mt-4 lg:mt-0">
          <Link href="#demo">
            <button className="bg-gradient-to-r from-[#17D694] to-[#04B6A7] w-40 h-12 rounded-full text-white font-bold p-2">
              Request A Demo
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
