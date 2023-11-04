"use client";

import { Footer } from "flowbite-react";
import Image from "next/image";
import applestore from "@/assets/applestore.svg";
import googleplay from "@/assets/googleplay.svg";
import logo from "@/assets/logo.svg";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import pinterest from "@/assets/pinterest.svg";

export default function FooterWithSocialMediaIcons2() {
  return (
    <Footer container className="bg-black">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Image
              src={logo}
              alt="Youtube"
              width={100}
              height={100}
              className="m-2 ml-20"
            />
            <br />
            <p style={{ color: "white" }} className="m-2 ml-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
              Sequi a minima neque! Saepe repudiandae optio dolore, <br />
              adipisci asperiores obcaecati temporibus aperiam est, nemo
              laboriosam recusandae minus. Laboriosam ipsa autem error.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-1">
            <div className=" justify-end">
              <Footer.Title
                title="Tentang Kami"
                style={{ color: "white" }}
                className="m-2 ml-20"
              />
              <Footer.LinkGroup col className="m-2 ml-20">
                <Footer.Link href="#" style={{ color: "white" }}>
                  Blog
                </Footer.Link>
                <Footer.Link href="#" style={{ color: "white" }}>
                  Layanan
                </Footer.Link>
                <Footer.Link href="#" style={{ color: "white" }}>
                  Karir
                </Footer.Link>
                <Footer.Link href="#" style={{ color: "white" }}>
                  Pusat Media
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Download"
                className="m-2"
                style={{ color: "white" }}
              />
              <Footer.LinkGroup row>
                <Footer.Link href="#">
                  <Image
                    src={googleplay}
                    alt="Google Play"
                    width={150}
                    height={150}
                  />
                </Footer.Link>
                <Footer.Link href="#">
                  <Image
                    src={applestore}
                    alt="Apple Store"
                    width={150}
                    height={150}
                  />
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.Title
                title="Social Media"
                className="m-2"
                style={{ color: "white" }}
              />
              <Footer.LinkGroup row className="m-2">
                <Footer.Link href="#">
                  <Image src={facebook} alt="" width={30} height={30} />
                </Footer.Link>
                <Footer.Link href="#">
                  <Image src={pinterest} alt="" width={30} height={30} />
                </Footer.Link>
                <Footer.Link href="#">
                  <Image src={instagram} alt="" width={30} height={30} />
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          by="Milan Tv . All Rights Reserved"
          href="#"
          year="2000 - 202"
        />
      </div>
    </Footer>
  );
}
