import React from "react";
import MaxWidthWrapper from "../components/mmw";
import Image from "next/image";
import { FAQ } from "../components/constants/index";
import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa6";

const Main = () => {
  return (
    <section className="h-full w-full">
      <MaxWidthWrapper className="h-full">
        <div className="grid justify-center">
          <Link
            href="https://play.google.com/store/apps/details?id=com.zervebox.app"
            target="_blank"
          >
            <Image
              src="/img/bgImg.png"
              alt="background-image"
              height={700}
              width={700}
              className="mt-0 max-w-full h-auto"
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.zervebox.app"
            target="_blank"
          >
            <div className="flex justify-center items-center p-4 md:p-10 pt-0">
              <button
                className="bg-gray-300 text-black text-lg md:text-xl py-4 px-6 md:py-6 md:px-8 rounded-2xl flex justify-center items-center hover:bg-gray-400 transition-all duration-200"
                style={{ width: "80%", maxWidth: "400px" }}
              >
                <h3 className="text-lg md:text-xl pr-2">Download Now</h3>
                <FaGooglePlay size={20} className="md:size-25" />
              </button>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1">
          <div>
            <h2 className="text-center text-3xl md:text-5xl font-semibold">
              Why <span className="text-[#F5753A]">Zerve</span>
              <span className="text-[#3E479B]">box</span> ?
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between py-6 md:py-10">
            {FAQ.map((item, index) => (
              <div key={index} className="p-4 flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {item.heading}
                </h3>
                <p className="text-base md:text-lg">{item.discription}</p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Main;
