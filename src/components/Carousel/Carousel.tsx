import Image from "next/image";
import { motion } from "framer-motion";
const Carousel = () => {
  const logos = [
    {
      name: "Airbnb",
      link: "/assets/airbnb.png",
    },
    {
      name: "Google",
      link: "/assets/google.png",
    },
    {
      name: "Visa",
      link: "/assets/visa.png",
    },
    {
      name: "Tesla",
      link: "/assets/tesla.png",
    },
    {
      name: "Mastercard",
      link: "/assets/mastercard.png",
    },
    {
      name: "Shopify",
      link: "/assets/shopify.png",
    },
    {
      name: "PayPal",
      link: "/assets/paypal.png",
    },
    {
      name: "Stripe",
      link: "/assets/stripe.png",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex space-x-4 overflow-hidden mygradient">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 items-center gap-5"
        >
          {logos.map((logo) => {
            return (
              <div key={logo.name} className="w-40">
                <Image
                  src={logo.link}
                  alt={logo.name}
                  width={200}
                  height={200}
                />
              </div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 items-center gap-5"
        >
          {logos.map((logo) => {
            return (
              <div key={logo.name} className="w-40">
                <Image
                  src={logo.link}
                  alt={logo.name}
                  width={200}
                  height={200}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
