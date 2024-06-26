import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="lg:flex mt-8 w-4/5 max-w-7xl mx-auto items-center justify-between">
        <div className="flex items-center">
          <Image src="/logo.png" alt="" width={35} height={35} />
          <h3 className="text-lg ml-2">Omnihale</h3>
        </div>
        <div>
          <div className="hidden lg:block border border-b rounded-full p-1 border-[#CCF6E6] w-fit mt-4 lg:mt-0">
            <button className="bg-gradient-to-r from-[#17D694] to-[#04B6A7] w-40 h-12 rounded-full text-white font-bold p-2">
              Request A Demo
            </button>
          </div>
        </div>
      </header>
      <section className="mt-14 w-4/5 max-w-5xl mx-auto items-center justify-between">
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
            analytics, our EMR solution empowers medical professionals to focus
            on what truly matters—delivering exceptional patient care.
            Experience the future of healthcare management and improve outcomes
            with our EMS platform.
          </h2>
        </div>
        <div>
          <div className="border border-b rounded-full p-1 border-[#CCF6E6] w-fit mx-auto mt-10">
            <button className="bg-gradient-to-r from-[#17D694] to-[#04B6A7] w-40 h-12 rounded-full text-white font-bold p-2">
              Request A Demo
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#080305] mt-32 lg:mt-48 pb-32">
        <div className="">
          <Image
            src="/medic-patient-looking-human-body-analysis.jpg"
            alt=""
            width={1280}
            height={700}
            className="w-4/5 max-w-7xl mx-auto relative -top-10 lg:-top-24 rounded-3xl "
          />
        </div>
        <div className="flex justify-between w-4/5 max-w-7xl mx-auto">
          <div>
            <h2 className="text-lg lg:text-4xl text-white font-bold">
              Love By HealthCare across the nation
            </h2>
            <p className="text-[#3B3839] mt-3 text-base lg:text-lg ">
              Empowering Small, Medium and Large Healthcare Providers with our
              EMS Software
            </p>
          </div>
          <div className="w-72"></div>
          <div className="lg:flex items-start">
            <div className="flex mr-4">
              <h2 className="text-white text-5xl font-bold">85%</h2>
            </div>
            <div className="pl-4 border-l-2 border-[#3B3839]">
              <p className="text-[#3B3839]">
                Digital Transformations Initiative do not meet the Planned ROI
                without a proper adoption strategy
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-14 w-4/5 max-w-5xl mx-auto items-center justify-between">
        <div>
          <h2 className="text-center text-5xl font-bold mb-6">Omnihale EMS</h2>
          <p className="text-center">
            Cost-effective Software + Simplified User Experience = Well-rounded
            Satisfaction &#129309;
          </p>
        </div>
        <div className="flex items-center mt-24 mb-14 bg-gray-50 p-24 rounded-3xl overflow-hidden">
          <div className="max-w-96">
            <h2 className="text-5xl font-bold mb-4 w-10/12">
              User-friendly
              <span className="text-[#17D694]"> for Everyone</span>
            </h2>
            <p>
              Our platform is designed with a user-friendly interface for
              everyone, ensuring that users of all technical skill levels can
              navigate and utilize its features with ease. Whether you're a
              tech-savvy professional or someone less familiar with digital
              tools, our interface adapts to your needs, providing a seamless
              and enjoyable experience.
            </p>
          </div>
          <div className="relative left-56 bg-gradient-to-r from-[#17D694] to-[#04B6A7] pt-10 pl-10 rounded-t-3xl rounded-b-3xl">
            <div>
              <Image
                src="/ui-ux.jpg"
                alt=""
                width={1000}
                height={35}
                className="rounded-t-3xl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
