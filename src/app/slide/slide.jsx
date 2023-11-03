"use client";

import Image from "next/image";
import bg1 from "@/assets/bg1.jpg";
import bg2 from "@/assets/bg2.jpg";
import bg3 from "@/assets/bg3.jpg";
import { Carousel } from "flowbite-react";

export default function Slide() {
  return (
    <>
      <Carousel>
        <div className="relative w-full bg-black">
          {/* Pembungkus Carousel */}
          <div className="relative h-56 overflow-hidden md:h-96">
            {/* Item 1 */}
            <div>
              <Image src={bg1} alt="" />
            </div>
            {/* Item 2 */}
            <div>
              <Image src={bg2} alt="" />
            </div>
            {/* Item 3 */}
            <div>
              <Image src={bg3} alt="" />
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}
