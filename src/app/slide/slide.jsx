"use client";

import Image from "next/image";
import bg1 from "@/assets/bg1.jpg";
import bg2 from "@/assets/bg2.jpg";
import bg3 from "@/assets/bg3.jpg";
import bg4 from "@/assets/bg4.jpg";
import { Carousel } from "flowbite-react";

export default function Slide() {
  return (
    <>
      <Carousel>
        <div className="relative w-full">
          {/* Pembungkus Carousel */}

          <div className="relative h-56 overflow-hidden md:h-96">
            <Image src={bg1} alt="" />
          </div>
        </div>
        <div className="relative w-full">
          {/* Pembungkus Carousel */}

          <div className="relative h-56 overflow-hidden md:h-96">
            <Image src={bg2} alt="" />
          </div>
        </div>
        <div className="relative w-full">
          {/* Pembungkus Carousel */}

          <div className="relative h-56 overflow-hidden md:h-96">
            <Image src={bg3} alt="" />
          </div>
        </div>
        <div className="relative w-full">
          {/* Pembungkus Carousel */}

          <div className="relative h-56 overflow-hidden md:h-96">
            <Image src={bg4} alt="" />
          </div>
        </div>
      </Carousel>
    </>
  );
}
