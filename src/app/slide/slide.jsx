"use client";

import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import bg1 from '@/assets/bg1.jpg';
import bg2 from '@/assets/bg2.jpg';
import bg3 from '@/assets/bg3.jpg';

export default function Slide() {
  return (
    <Carousel>
      <Image src={bg1} alt='bg1'/>
      <Image src={bg2} alt='bg2'/>
      <Image src={bg3} alt='bg2'/>
    </Carousel>
  )
}