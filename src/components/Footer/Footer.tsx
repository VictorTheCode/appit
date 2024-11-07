import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container mx-auto flex flex-col items-center gap-8">
      <header className="flex flex-col items-center">
        <Image
          src="/assets/logo-white.png"
          width={300}
          height={300}
          className="h-[100px] w-[200px] object-cover"
          alt="Logo"
        />
        <h3 className="text-xl max-w-xs text-center font-medium">
          Empower your Social Connections with Appit Social
        </h3>
      </header>
      <button className="bg-slate-900 rounded-lg py-3 px-5">
        <a href="" className="text-lg">
          ✉️ hello@appit.com
        </a>
      </button>

      <div>
        <div>
          <Link href="">Benefits</Link>
          <Link href="">Features</Link>
          <Link href="">Pricing</Link>
          <Link href="">Testimonials</Link>
          <Link href="">FAQ's</Link>
          <Link href="/waitlist">Waitlist</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
