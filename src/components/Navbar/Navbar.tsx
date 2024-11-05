import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full flex items-center justify-between px-28 bg-black bg-opacity-0 z-10 backdrop-filter backdrop-blur-[5px] border-b border-gray-800">
      <Link href="/" className="text-2xl ">
        <Image
          src="/assets/logo-white.png"
          alt="logo"
          width={120}
          height={120}
          className="w-28 h-24 object-cover"
        />
      </Link>
      <ul className="text-gray-400 flex items-center justify-between gap-8 tracking-wider">
        <Link href={""}>Benefits</Link>
        <Link href={""}>Features</Link>
        <Link href={""}>Pricing</Link>
        <Link href={""}>Testimonials</Link>
        <Link href={""}>FAQs</Link>
      </ul>
      <div>
        <Button className="bg-white py-4 hover:bg-white/100">
          <Link href="/waitlist" className="text-black font-bold">
            Join Waitlist
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
