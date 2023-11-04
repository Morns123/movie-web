"use client";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import SigninPop from "@/app/signin/page";
import Overview from "@/app/details/overview";
import FooterWithSocialMediaIcons2 from "@/app/footer/newFooter";

export default function Page() {
  return (
    <>
      <header className="md:flex py-2 p-2">
        <nav className="flex container mx-auto justify-between items-center">
          <Image
            src={logo}
            alt="logo"
            width="100"
            height="100"
            className="mb-2 md:mb-0"
          />
          <div className="w-full md:w-auto">
            <input
              type="text"
              placeholder="Searching"
              className="rounded-lg w-full md:w-auto"
            />
          </div>
          <div>
            <SigninPop />
          </div>
        </nav>
      </header>
      <main>
        <Overview />
      </main>
      <footer>
        <FooterWithSocialMediaIcons2 />
      </footer>
    </>
  );
}
