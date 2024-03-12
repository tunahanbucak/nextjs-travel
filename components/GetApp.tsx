import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const GetApp = () => {
  return (
    <section className=" pt-10 mt-10 flex items-center justify-center w-full flex-col pb-[100px]">
      <div className="max-container relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="text-[40px]  lg:text-[64px] font-[700] leading-[120%] xl:max-w-[320px]">
            Şimdi ücretsiz alın!
          </h2>
          <p className="text-[16px] font-[400] text-gray-10">
            iOS ve Android'de kullanılabilir
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="px-5 py-5 flex bg-slate-600 hover:bg-slate-700 text-gray-300 hover:text-white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="border-white-500 bg-green-700 px-5 py-5 text-white flex hover:bg-sky-400 hover:text-white"
              full
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
      <div className="p-10">
        <Link href="/" className="scroll-smooth ">
          <Image src="up.svg" alt="up" width={20} height={20} />
        </Link>
      </div>
    </section>
  );
};

export default GetApp;
