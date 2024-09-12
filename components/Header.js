import Image from "next/image";

import Link from "next/link";

import Socials from "../components/Socials.js";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-y-0 py-1 ">
          {/* Logo */}
          <Link href={"/"}>
            <div className="text-[35px]">
              <h1 className="dev">
                dev&#160;
                <span className="arora font-thin">
                  arora<span className="text-accent text-[45px]">.</span>
                </span>
              </h1>
            </div>
          </Link>
          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
