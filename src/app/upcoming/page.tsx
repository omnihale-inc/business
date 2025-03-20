import React from "react";
import { Metadata } from "next/types";

import Navigation from "@/components/Navigation";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Omnihale | Upcoming Products",
  description:
    "Showing products either in development, ready to launch or in ideation stage",
  keywords: [
    "School website with student portal",
    "An Application that can Help manage My Store",
    "Online Store for My business for Free",
  ],
};

export default function Page() {
  return (
    <main>
      <Navigation />
      <Products />
      <Footer />
    </main>
  );
}
