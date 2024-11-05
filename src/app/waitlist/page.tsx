import React from "react";
import FAQs from "../Faq/page";

const Waitlist = () => {
  return (
    <main className="container text-white py-16 mx-auto px-30 min-h-screen flex flex-col items-center">
      <div>
        <header>
          <h1 className="text-[4rem] font-bold">Get Early Access</h1>
          <p>
            Be among the first to experience Wait and launch a viral waitlist.
          </p>
        </header>
      </div>
      <div></div>
      <FAQs />
    </main>
  );
};

export default Waitlist;
