import Link from "next/link";
import { linkData } from "./menuData";

export default function Navlinks() {
  return (
    <ul className="gap-10  text-dark font-medium text-sm hidden lg:flex order-2 xl:order-2">
      {linkData.map((item) => (
        <li key={item.text}>
          <Link className="hover:opacity-95  tracking-wide" href={item.link}>
            {item.text}
          </Link>
        </li>
      ))}
      <li>
        <Link href="#" className="hover:opacity-95  tracking-wide">
          Volunteer
        </Link>
      </li>
    </ul>
  );
}
