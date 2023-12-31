import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-3">
      <li className="p-[6px] border border-dark rounded-[50%]">
        <Link href="https://web.facebook.com/">
          <FaSquareFacebook className="text-lg text-dark" />
        </Link>
      </li>
      <li className="p-[6px] border border-dark rounded-[50%]">
        <Link href="https://twitter.com/">
          <FaTwitterSquare className="text-lg text-dark" />
        </Link>
      </li>
      <li className="p-[6px] border border-dark rounded-[50%]">
        <Link href="https://www.linkedin.com/">
          <IoLogoLinkedin className="text-lg text-dark" />
        </Link>
      </li>
      <li className="p-[6px] border border-dark rounded-[50%]">
        <Link href="https://www.instagram.com/">
          <IoLogoInstagram className="text-lg text-dark" />
        </Link>
      </li>
    </ul>
  );
}
