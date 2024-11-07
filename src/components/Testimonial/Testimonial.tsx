"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-card.tsx";
import { TestimonialProps } from "@/interface/index.ts";

export default function InfiniteMovingCardsDemo() {
  const testimonials = [
    {
      name: "Emma Johnson",
      avatar: "/assets/woman.jpg",
      title: "Founder at Noob",
      quote:
        "Appit has revolutionized the way we handle transactions, making every transfer seamless and lightning-fast. It’s a game-changer for our business.",
    },
    {
      name: "Michael Lee",
      avatar: "/assets/user.jpg",
      title: "CEO at FinPlus",
      quote:
        "Switching to Appit was one of the best decisions we've made. Our team and clients love the reliability and transparency of every transaction.",
    },
    {
      name: "Justin Martinez",
      avatar: "/assets/male.jpg",
      title: "Product Manager at QuickPay",
      quote:
        "Appit has drastically reduced transfer delays, and the user experience is top-notch. It’s a must-have for any fintech operation.",
    },
    {
      name: "Daniel Wong",
      avatar: "/assets/man.jpg",
      title: "CTO at SecureFunds",
      quote:
        "Appit’s commitment to user experience and security is impressive. Our customers can now make transfers with confidence and ease.",
    },
    {
      name: "Liam Patel",
      avatar: "/assets/bald.jpg",
      title: "Founder at PayConnect",
      quote:
        "With Appit, our team spends less time troubleshooting transfer issues and more time growing our business. It’s the reliable solution we needed.",
    },
    {
      name: "Davis Torres",
      avatar: "/assets/beard.jpg",
      title: "COO at FundFlow",
      quote:
        "Appit's intuitive interface and instant transfers have improved our workflow tremendously. It’s made a big difference in how we serve our clients.",
    },
    {
      name: "Ethan Roberts",
      avatar: "/assets/avatar.jpg",
      title: "CTO at SwiftBank",
      quote:
        "Appit combines efficiency with simplicity, making it easier than ever for our team to manage client transactions. It’s truly a standout fintech solution.",
    },
  ];

  return (
    <div className="container mx-auto">
      <header className="flex flex-col items-center gap-3">
        <h1 className="text-[4rem] font-bold">Our Testimonial</h1>
        <p className="text-lg text-gray-500 max-w-lg text-center">
          See how Appit has transformed users social experiences through their
          own words
        </p>
      </header>
      <div className="-mt-[3rem] mb-19">
        <div className="h-[30rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}
