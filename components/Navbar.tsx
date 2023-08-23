import Link from "next/link";
import Image from "next/image";
// Components
import { Button } from "@/components";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        {/* logo */}
        <Link href="/" className="flex justify-center items-center">
          <Image className="object-contain" src="/logo.svg" alt="Car Store" width={118} height={18} />
        </Link>
        {/* signIn btn */}
        <Button title="Sighn In" btnType={"button"} containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]" />
      </nav>
    </header>
  );
};

export default Navbar;
