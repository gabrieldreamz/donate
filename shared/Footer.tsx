import Link from "next/link";

import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function Footer() {
  return (
    <section className="bg-gray-200 flex flex-col lg:flex-row gap-10 lg:gap-32 px-5 p-7 justify-center">
      <div className="flex flex-col gap-3">
        <p className="font-medium lg:font-semibold text-lg  text-blue-500 ">
          ForThePpl
        </p>
        <p className="max-w-sm text-sm font-medium text-dark/80">
          Help others by using fortheppl, a platform that is safe, transparent
          and trusted
        </p>
        <Link
          className="text-sm font-medium text-dark/80"
          href="mailto:support@fortheppl.com"
        >
          support@fortheppl.com
        </Link>
        <Link
          className="text-sm font-medium text-dark/80"
          href="tel:08061695391"
        >
          08061695391
        </Link>

        <ul className="flex items-center gap-3 mt-5">
          <li className="p-2 border border-slate-500 rounded-[50%]">
            <Link href="https://web.facebook.com/">
              <FaSquareFacebook className="text-xl text-slate-500" />
            </Link>
          </li>
          <li className="p-2 border border-slate-500 rounded-[50%]">
            <Link href="https://twitter.com/">
              <FaTwitterSquare className="text-xl text-slate-500" />
            </Link>
          </li>
          <li className="p-2 border border-slate-500 rounded-[50%]">
            <Link href="https://www.linkedin.com/">
              <IoLogoLinkedin className="text-xl text-slate-500" />
            </Link>
          </li>
          <li className="p-2 border border-slate-500 rounded-[50%]">
            <Link href="https://www.instagram.com/">
              <IoLogoInstagram className="text-xl text-slate-500" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Links  */}
      <div className="flex flex-col lg:flex-row gap-7 lg:gap-32">
        <div className="flex flex-col gap-3">
          <h1 className="font-medium">Home</h1>
          <p className="text-sm font-medium text-dark/80">About us</p>
          <p className="text-sm font-medium text-dark/80">Programs</p>
          <p className="text-sm font-medium text-dark/80">Lorem</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-medium">Resources</h1>
          <p className="text-sm font-medium text-dark/80">Contact us</p>
          <p className="text-sm font-medium text-dark/80">FAQ</p>
          <p className="text-sm font-medium text-dark/80">Featured</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-medium">Legal</h1>
          <p className="text-sm font-medium text-dark/80">Privacy Policy</p>
          <p className="text-sm font-medium text-dark/80">Terms & Condition</p>
        </div>
      </div>
    </section>
  );
}
