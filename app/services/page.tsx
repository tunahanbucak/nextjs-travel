import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <section className="flex-col flex items-center justify-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px] "
            />
            <h2 className="text-[40px]  leading-[120%]lg:text-[64px] font-[700] leading-[120%] pt-7">
              Hizmetlerimiz
            </h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <li className="flex w-full flex-1 flex-col items-start">
                <div className="rounded-full p-4 lg:p-7 bg-green-50">
                  <Image src={feature.icon} alt="map" width={28} height={28} />
                </div>
                <h2 className=" text-[20px] lg:text-[32px] font-[700] leading-[120%] mt-5 capitalize">
                  {feature.title}
                </h2>
                <p className="text-[16px] font-[400] mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
