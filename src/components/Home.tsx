"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoControlHandler = () => {
    if (isVideoPlaying && videoRef && videoRef.current) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      if (!isVideoPlaying && videoRef && videoRef.current) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };
  return (
    <section className="home flex flex-col-reverse lg:flex-row lg:justify-center lg:items-center mt-44 lg:mt-32 mx-auto max-w-6xl w-5/6">
      <div className="w-full max-w-lg mx-auto ">
        <h2 className="text-2xl text-center lg:text-5xl lg:text-left font-bold mt-6 lg:mt-0">
          Connect, Sell, Teach, Eat and Grow
        </h2>
        <p className="text-xs text-center lg:text-base lg:text-left mt-5 lg:mt-3 font-light">
          Our vision is to connect communities, empower businesses to sell,
          inspire learning, enrich dining experiences, and foster growth,
          creating a thriving ecosystem where everyone can flourish together.
        </p>
        <Link
          href="/upcoming"
          className="block text-center lg:text-left hover:text-[#288054] text-[#107684] font-semibold mt-9"
        >
          See Upcoming
        </Link>
      </div>
      <div className="relative h-96 w-4/6 lg:w-64 mx-auto">
        <video
          src="/home.mp4"
          className="h-full w-full object-cover object-center rounded-lg"
          autoPlay
          loop
          muted
          ref={videoRef}
        ></video>
        <div className="absolute flex top-0 h-full w-full">
          <div className="flex flex-col justify-end w-full h-full pr-2 pb-2 bg-black/5 rounded-lg">
            <div className="flex justify-end">
              <div className="relative h-5 w-4" onClick={videoControlHandler}>
                <Image
                  src={isVideoPlaying ? "/pause.png" : "/play.png"}
                  alt="controls"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
