import React from "react";
import FAQs from "../Faq/page";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown/Countdown";

const Waitlist = () => {
  return (
    <main className="container font-[satoshi] text-white py-16 mx-auto px-30 min-h-screen flex flex-col items-center">
      <header className="flex flex-col items-center gap-3 ">
        <h1 className="text-[4rem] font-bold tracking-wide">
          Get early access
        </h1>
        <p className="text-gray-400 text-xl w-2/3 text-center">
          Be among the first to experience Wait and launch a viral waitlist.
          Sign up to be notified when we launch.
        </p>
      </header>
      <div className=" my-7 flex w-full max-w-md space-x-2">
        <Input
          type="email"
          placeholder="Enter your email"
          className="border-gray-800 py-5 px-3 text-md"
        />
        <Button
          type="submit"
          className="bg-white text-black py-5 hover:bg-white hover:text-black"
        >
          Join Waitlist
        </Button>
      </div>
      <p className="mt-1 text-xl text-gray-500">
        No Spam, Only Genuine Updates
      </p>

      <Countdown />
      <div className="py-9 min-w-[90%] mx-auto">
        {/* <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2> */}
        <h2 className="text-[4rem] w-full font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <FAQs />
      </div>
    </main>
  );
};

export default Waitlist;
