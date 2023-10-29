import Image from "next/image"
import logo from "@/assets/logo.svg"
import ListMovie from "./sections/ListMovie"
import SigninPop from "./signin/page";

export default function Home() {
  return (
    <>
      <header className="py-2 shadow-md shadow-gray-600">
        <nav className="flex container mx-auto justify-between items-center ">
          <Image src={logo} alt="logo" width="100" height="100" />
          <div>
            <input type="text" placeholder="Searching" className="rounded-lg" />
          </div>
          <div>
            <SigninPop/>
          </div>
        </nav>  
      </header>
      <main className="container mx-auto mt-10 relative">
        <ListMovie/>
      </main>
    </>
  );
}
