import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="mt-16 lg:mt-28 w-4/5 max-w-5xl mx-auto" id="about">
      <div>
        <h2 className="text-center text-3xl lg:text-5xl font-bold mb-6">
          Omnihale EMS
        </h2>
        <p className="text-center text-xs lg:text-base">
          Cost-effective Software + Simplified User Experience = Well-rounded
          Satisfaction &#129309;
        </p>
      </div>
      <div className="md:flex items-center justify-between lg:block">
        <div className="lg:flex items-center mt-16 mb-14 bg-gray-50 px-10 pt-16 pb-20 lg:p-20 rounded-3xl overflow-hidden">
          <div className="max-w-[400px]">
            <h2 className="text-2xl lg:text-5xl font-bold mb-4 w-10/12">
              User-friendly
              <span className="text-[#17D694]"> for Everyone</span>
            </h2>
            <p className="text-sm lg:text-base">
              Our platform is designed with a user-friendly interface for
              everyone, ensuring that users of all technical skill levels can
              navigate and utilize its features with ease. Whether you&apos;re a
              tech-savvy professional or someone less familiar with digital
              tools, our interface adapts to your needs, providing a seamless
              and enjoyable experience.
            </p>
          </div>
          <div className="relative left-20 lg:left-56 top-10 lg:top-0 bg-gradient-to-r from-[#17D694] to-[#04B6A7] pt-5 pl-5 lg:pt-10 lg:pl-10 rounded-t-3xl rounded-b-3xl">
            <div>
              <Image
                src="/ui-ux.jpg"
                alt=""
                width={1000}
                height={35}
                className="rounded-t-2xl"
              />
            </div>
          </div>
        </div>
        <div className="lg:flex flex-row-reverse items-center mt-16 mb-14 bg-gray-50 p-20 rounded-3xl overflow-hidden px-10 pt-16 pb-20 lg:p-20">
          <div className="max-w-[400px]">
            <h2 className="text-2xl lg:text-5xl font-bold mb-4 w-11/12">
              <span className="text-[#17D694]">Affordable </span>
              and high-quality
            </h2>
            <p className="text-sm lg:text-base">
              Our platform offers an affordable and high-quality solution for
              all your needs. Whether you&apos;re a small business or a large
              enterprise, our solution ensures you can access premium
              capabilities and support while staying within your budget.
            </p>
          </div>
          <div className="relative right-20 lg:right-56 top-10 lg:top-0 bg-gradient-to-r from-[#04B6A7] to-[#17D694] pt-5 pr-5 lg:pt-10 lg:pr-10 rounded-t-3xl rounded-b-3xl">
            <div>
              <Image
                src="/affordable.jpg"
                alt=""
                width={1000}
                height={35}
                className="rounded-t-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
