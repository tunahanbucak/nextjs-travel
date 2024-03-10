import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-[16px] font-[400] text-gray-50 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flex items-center justify-center hidden">
        <Button
          type="button"
          title="Giriş Yap"
          icon="/user.svg"
          variant="bg-black p-3 px-5 text-gray-300 flex transition-all hover:bg-cyan-500 hover:text-blue-200 hover:border-light-900 "
        />
      </div>
      {/* acilacak sekilde duzenlenecek */}
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
