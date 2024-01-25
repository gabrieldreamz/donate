import Link from "next/link";

import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function Footer() {
  return (
    <section className=" flex flex-col lg:flex-row gap-10 2xl:gap-32 px-5 pt-7 pb-10 md:pb-20 md:px-32 relative">
      <div className="flex flex-col gap-3">
        <Link href="/">
          <p className="font-medium lg:font-semibold text-lg  text-blue-500 ">
            AmorDivina
          </p>
        </Link>
        <p className="max-w-sm text-sm font-medium text-dark/80">
          Help others by using Amordivina, a platform that is safe, transparent
          and trusted
        </p>
        <Link
          className="text-sm font-medium text-dark/80 hover:underline flex items-center gap-2"
          href="mailto:support@amordivina"
        >
          <MdMail size={18} /> support@amordivina
        </Link>
        <Link
          className="text-sm font-medium text-dark/80 hover:underline flex items-center gap-2"
          href="tel:08061695391"
        >
          <FaPhoneVolume size={18} /> 08061695391
        </Link>

        <ul className="flex items-center gap-3 mt-5 lg:absolute lg:right-[8%] 2xl:right-[15%]">
          <li className="p-[6px] border border-dark rounded-[50%]">
            <Link
              target="blank"
              href="https://www.facebook.com/profile.php?id=61555481141562&mibextid=LQQJ4d"
            >
              <FaSquareFacebook className="text-lg text-dark" />
            </Link>
          </li>
          <li className="p-[6px] border border-dark rounded-[50%]">
            <Link target="blank" href="https://x.com/joinamordivina?s=11">
              <FaTwitterSquare className="text-lg text-dark" />
            </Link>
          </li>
          <li className="p-[6px] border border-dark rounded-[50%]">
            <Link
              target="blank"
              href="https://www.instagram.com/joinamordivina?igsh=dWdnNm04am5kZ24w"
            >
              <IoLogoInstagram className="text-lg text-dark" />
            </Link>
          </li>{" "}
        </ul>
      </div>

      {/* Links  */}
      <div className="flex flex-col lg:flex-row gap-7 lg:gap-32">
        <div className="flex flex-col gap-3">
          <h1 className="font-medium">Home</h1>
          <Link href="/about">
            <p className="text-sm font-medium text-dark/80">About us</p>
          </Link>
          <Link href="/blog">
            <p className="text-sm font-medium text-dark/80">Programs</p>
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-medium">Resources</h1>
          <Link href="/contact">
            <p className="text-sm font-medium text-dark/80">Contact us</p>
          </Link>
          <Link href="//#featured">
            <p className="text-sm font-medium text-dark/80">Featured</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
