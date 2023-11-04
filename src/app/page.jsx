import Image from "next/image";
import Slide from "./slide/slide";
import logo from "@/assets/logo.svg";
import SigninPop from "./signin/page";
import ListMovie from "./sections/ListMovie";
import FooterWithSocialMediaIcons from "./footer/footer";

export default function Home() {
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
      <Slide />
      <main className="container mx-auto mt-10 relative">
        <ListMovie />
      </main>
      <footer>
        <FooterWithSocialMediaIcons />
      </footer>
    </>
  );
}
