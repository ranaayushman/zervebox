"use client"

import Link from "next/link";
import { TextEffectPerChar } from "../components/HeroText";
import MaxWidthWrapper from "../components/mmw";

const Hero = () => {
    return (
        <section className="relative">
            <MaxWidthWrapper className="relative w-full h-full grid grid-rows-[auto,1fr,auto] justify-items-center items-center">
                <div className="row-start-1">
                    <img
                        src="/img/Main_Logo.png"
                        className="h-[60px] md:h-[80px] lg:h-[100px]"
                    />
                </div>
                <div className="row-start-2 text-center max-w-xl md:max-w-2xl py-10 px-4">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6">
                        Upgrade your <span className=" text-[#F5753A]">world,</span> refresh your <span className="text-[#3E479B]">wallet.</span>
                    </h1>
                    <div className="text-gray-600 pb-3">
                        <TextEffectPerChar />
                    </div>
                </div>
                <div className="row-start-3 pt-4 md:pt-6">
                    <Link href="https://play.google.com/store/apps/details?id=com.zervebox.app" target="_blank">
                        <button className="bg-[#F5753A] hover:bg-[#3E479B] transition-all duration-300 text-gray-100 py-2 px-4 md:py-3 md:px-6 rounded-full text-sm md:text-lg font-semibold">
                            Explore more
                        </button>
                    </Link>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Hero;
