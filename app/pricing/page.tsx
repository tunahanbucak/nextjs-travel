import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

export default function Pricing() {
  return (
    <div className="bg-gray-100 py-15 pb-20 mb-10 mx-auto max-w-[1440px] p-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Fiyatlandırma Planları
        </h2>
        <p className="mt-2 text-sm text-gray-600 text-center">
          İhtiyaçlarınıza uygun bir fiyatlandırma planı seçin.
        </p>
      </div>
      <div className="mt-2 max-w-4xl mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
          <div className="px-6 py-2">
            <h3 className="text-3xl font-extrabold text-gray-900 text-center">
              <Image src="/camp.svg" alt="camp" width={50} height={50} />
              Basic Plan
            </h3>
            <div className="mt-4 flex items-center justify-center">
              <span className="text-4xl font-extrabold text-gray-500">
                Ücretsiz
              </span>
              <span className="text-xl font-medium text-gray-500">/ay</span>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <ul>
              <li className="px-6 py-2 flex items-center">
                <Image
                  src="/check.svg"
                  alt="chech"
                  width={10}
                  height={10}
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                />
                <span className="ml-3 text-base font-medium text-gray-500">
                  Harita bulucu
                </span>
              </li>
              <li className="px-6 py-2 flex items-center">
                <Image
                  src="/check.svg"
                  alt="chech"
                  width={10}
                  height={10}
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                />
                <span className="ml-3 text-base font-medium text-gray-500">
                  Planlayıcı
                </span>
              </li>
              <li className="px-6 py-2 flex items-center">
                <Image
                  src="/check.svg"
                  alt="chech"
                  width={10}
                  height={10}
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                />
                <span className="ml-3 text-base font-medium text-gray-500">
                  Yürüyüş Yerleri..
                </span>
              </li>
            </ul>
          </div>
          <div className="p-6">
            <Button
              type="submit"
              title="Sign up"
              variant="block w-full py-3 px-4 rounded-md text-center font-medium  text-white bg-green-600 hover:bg-green-700"
              //animate-pulse
            />
          </div>
        </div>
        <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
          <h1 className="text-center mt-40 pb-5 text-lg font-mono font-extrabold">
            Yakında gelecek...
          </h1>
          <div className="mx-auto ml-20 p-5 text-center">
            <Image src="/hilink-logo.svg" alt="logo" width={150} height={150} />
          </div>
        </div>
      </div>
    </div>
  );
}
