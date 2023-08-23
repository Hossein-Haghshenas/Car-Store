import Link from "next/link";
import Image from "next/image";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      {/* footer top section */}
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          {/* logo */}
          <Image className="object-contain" src="/logo.svg" alt="Car Store" width={118} height={18} />
          {/* copyright */}
          <p className="text-base text-gray-700">
            Car Store 2023 <br />
            All right reserved &copy;
          </p>
        </div>
        {/* footer links */}
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} className="text-gray-500">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* footer bottom section */}
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        {/* copyright */}
        <p>@2023 Car Store. All Rights Reserved</p>
        {/* privacy policy */}
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
