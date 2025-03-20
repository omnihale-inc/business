import React from "react";

const NEWS = [
  {
    headding: "Developing Plato",
    details:
      "We are proud to announce that plato is currently in development and we are closer to our product launch",
  },
];

const News = () => {
  return (
    <section className="w-5/6 max-w-5xl mx-auto mt-12 mb-20 lg:mt-20 lg:mb-36">
      <h2 className="text-md lg:text-xl underline font-medium mb-6">News</h2>
      <div className="flex justify-between overflow-x-scroll lg:overflow-x-hidden lg:grid lg:grid-cols-3 lg:gap-2 news-content-scroll">
        {NEWS.map((item, index) => (
          <div className="basis-64 lg:basis-80 shrink-0 mr-7" key={index}>
            <h2 className="mb-4 text-xl lg:text-3xl font-semibold">
              {item.headding}
            </h2>
            <p className="text-sm lg:text-base">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
