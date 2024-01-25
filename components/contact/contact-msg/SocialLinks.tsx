import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-3">
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
      </li>
    </ul>
  );
}
