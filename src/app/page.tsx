"use client";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const centerRef = useRef(null);
  useEffect(() => {
    gsap.to(centerRef.current, {
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: centerRef.current,
        start: "top bottom", // Animation starts when image is near the bottom of viewport
        scrub: 1, // Smooth scrolling effect
      },
    });
  }, []);
  return (
    <div className="container mx-auto text-white">
      <div className="hero flex items-center flex-col justify-center gap-12 mt-12">
        <header className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-[4rem] w-[70%] text-center leading-tight font-[satoshi-bold]">
            Connect, Share, and Grow with Appit Social
          </h1>
          <p className="text-xl text-gray-400 max-w-md text-center">
            Join appit to build authentic connections and share your passions
            effortlessly.
          </p>
        </header>
        <button className="bg-white py-4 px-6 rounded-xl text-black hover:bg-gray-300">
          <Link href="/" className="text-lg font-semibold">
            Download App
          </Link>
        </button>

        <span className="flex items-center gap-3">
          <p className="text-gray-400 text-lg">App Available For</p>
          <div className="bg-gray-800/60 flex items-center gap-3 px-4 py-2 rounded-full">
            <Image
              src="/assets/play.png"
              alt="android"
              width={20}
              height={20}
            />
            <span className="h-6 w-[1px] bg-gray-500" />
            <Image
              src="/assets/appstore.png"
              alt="ios"
              width={20}
              height={20}
            />
          </div>
        </span>

        <div className="relative flex justify-between items-center mt-5">
          <div ref={centerRef} className="w-[80%] mx-auto fade-gradient">
            <Image
              className=""
              src="/assets/mobile2.png"
              alt="Center Phone"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
