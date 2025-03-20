import React from "react";
import Image from "next/image";

const PRODUCTS = [
  {
    image: "/products/agora.jpg",
    title: "Agora: Online Store",
    details:
      "We're excited to announce the upcoming launch of our powerful online store web application, designed to make selling online easier than ever before. Whether you're a small business owner or an entrepreneur, our platform will provide you with everything you need to create and manage your own online store with just a few clicks. With features like automated inventory management, customizable storefronts, and seamless payment integrations, you'll be able to connect with customers, showcase your products, and start earning quickly. Stay tuned for more details on how you can join the next generation of online retail!",
    tag: "Part of Delos",
  },
  {
    image: "/products/plato.jpg",
    title: "Plato: School Management System",
    details:
      "We’re thrilled to announce the upcoming launch of our innovative school management system web application, designed to streamline and simplify the way schools operate. This all-in-one platform will empower administrators, teachers, and parents to manage everything from student enrollment and attendance to grading, communication, and reporting with ease. With user-friendly dashboards, real-time updates, and secure access, our system will enhance collaboration, improve efficiency, and ensure a seamless educational experience for everyone involved. Get ready to revolutionize the way your school functions and stay ahead in the ever-evolving educational landscape. Stay tuned for more exciting details!",
    tag: "Part of Delos",
  },
  {
    image: "/products/fao.jpg",
    title: "Fao: Restaurant System",
    details:
      "We’re excited to announce the upcoming launch of our cutting-edge restaurant system web application, designed to revolutionize the way you manage your dining establishment. This all-in-one platform will simplify operations, from order management and table reservations to inventory tracking and customer loyalty programs. With an intuitive interface and real-time analytics, you’ll be able to enhance the dining experience, streamline workflows, and boost efficiency. Whether you run a small café or a bustling restaurant, our system is tailored to meet your unique needs, helping you focus on what matters most—delivering exceptional food and service. Stay tuned for more details!",
    tag: "Part of Delos",
  },
  {
    image: "/products/omniverse.jpg",
    title: "Omniverse: Social Todo",
    details:
      "We're excited to introduce our upcoming social to-do application, designed to transform the way you organize and achieve your goals. This innovative platform will not only help you manage your tasks and routines but also connect you with friends and like-minded individuals to collaborate and share progress. Whether you’re working on personal projects, group assignments, or daily routines, our app will make staying on track more engaging and fun. With features like shared task lists, progress tracking, and social motivation, achieving your goals has never been easier. Get ready to elevate your productivity with a social twist!",
    tag: "",
  },
];

const Products = () => {
  return (
    <section className="mt-44 lg:mt-32 mx-auto max-w-6xl w-5/6">
      <h2 className="mt-16 lg:mt-44 mb-6 lg:mb-10 text-sm lg:text-2xl text-center lg:text-left font-semibold">
        Products coming to you
      </h2>
      <div className="flex justify-between flex-wrap">
        {PRODUCTS.map((product, index) => (
          <div
            key={index}
            className="w-5/6 basis-[414px] xl:basis-[500px] mx-auto lg:mx-0 mb-16 lg:mb-24"
          >
            <div className="relative h-52 lg:h-[304px]">
              <Image
                src={product.image}
                alt="product"
                fill
                objectFit="cover"
                className="rounded-md lg:rounded-lg"
              />
            </div>
            <h2 className="mt-7 mb-3  lg:mt-12 lg:mb-7 text-2xl lg:text-5xl font-semibold">
              {product.title}
            </h2>
            <p className="text-sm lg:text-xl">{product.details}</p>
            <div className="flex justify-end mt-5 lg:mt-10">
              <h2 className="font-semibold">{product.tag}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
