"use client"

import { TextEffectPerChar } from "../components/HeroText";
import MaxWidthWrapper from "../components/mmw";


const Hero = () => {
    return (
        <section className="relative">
            <MaxWidthWrapper className="relative w-full h-[100vh] flex items-center justify-center">
                <div className="absolute top-[1.5rem]">
                    <img
                        src="/img/Main_Logo.png"
                        className="h-[100px]"
                    />
                </div>
                <div className="text-center max-w-2xl">
                    <h1 className="text-6xl font-bold text-black mb-6">Upgrade your <span className=" text-[#F5753A]"> world,</span> refresh your <span className="text-[#3E479B]"> wallet.</span></h1>
                    <div className="text-gray-600 pb-3">
                        <TextEffectPerChar />
                    </div>
                    <div className="pt-6">
                        <button className="bg-[#F5753A] hover:bg-[#3E479B] transition-all duration-300 text-gray-100 py-3 px-6 rounded-full text-lg font-semibold">
                            Explore more
                        </button>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Hero;
