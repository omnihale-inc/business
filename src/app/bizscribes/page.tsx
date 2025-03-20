import { Metadata } from "next";

import Navigation from "@/components/Navigation";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Omnihale | BizScribes: Articles to help SME scale",
  description:
    "Providing helpful information for small to large scale enterprise to thrive in a competitive market",
  keywords: [
    "Business Tip, Business Updates and Business News",
    "Getting Capital for Your Business",
    "Increasing Revenue through Sales and Customer Retention ",
    "Business Plan, Profit and Loss",
    "Lean StartUp: Growing Your Business into Large Scale Enterprise",
  ],
};

export default function Page() {
  return (
    <main className="flex flex-col justify-between h-screen">
      <div>
        <Navigation />
        <Articles />
      </div>
      <Footer />
    </main>
  );
}
