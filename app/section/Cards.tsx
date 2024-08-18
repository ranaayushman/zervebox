// import Card from "@/components/card";
import Preview from "../components/Preview"
import MaxWidthWrapper from "../components/mmw";
import { preview } from "../components/constants/index";
import React from "react";

const Cards = () => {
  return (
    <section className="pb-4">
      <MaxWidthWrapper className="text-white py-8">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 px-6 gap-x-20 gap-y-8">
            {preview.map((card, index) => (
              <Preview
                key={index}
                imgsrc={card.img}
                title={card.title}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Cards;
