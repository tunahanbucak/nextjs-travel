"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <div className="lg:hidden">
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer"
          onClick={toggleMobileMenu}
        />
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-full h-full bg-gray-800 text-white">
          <div className="flex items-center justify-end p-4">
            <Image
              src="close.svg"
              alt="close"
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={closeMobileMenu}
            />
          </div>
          <div className="flex flex-col items-center">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="text-[16px] font-[400] cursor-pointer my-2 transition-all hover:font-bold"
                onClick={closeMobileMenu}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
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
      <div className="lg:flex items-center justify-center">
        <Button
          type="button"
          title="Giriş Yap"
          icon="/user.svg"
          variant="bg-black p-3 px-5 text-gray-300 flex transition-all hover:bg-cyan-500 hover:text-blue-200 hover:border-light-900 "
        />
      </div>
    </nav>
  );
}
