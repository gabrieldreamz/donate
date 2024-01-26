import Link from "next/link";
import SocialLinks from "../contact-msg/SocialLinks";

export default function ContactMsg() {
  return (
    <section className="flex flex-col justify-between">
      <div className="grid gap-5">
        <div>
          <p className="text-lg font-medium">Contacts</p>
          <Link
            href="mailto:joinamordivina@africamail.com"
            className="hover:text-blue-500 hover:underline duration-150 text-sm font-medium text-dark/80"
          >
            joinamordivina@africamail.com
          </Link>
        </div>

        <div className="grid gap-2">
          <p className="text-lg font-medium">Follow</p>
          <SocialLinks />
        </div>
      </div>

      <div className="max-w-xs mt-14 md:mt-0 grid gap-3">
        <p className="text-sm font-medium text-dark/80">
          Help others by using Amordivina, a platform that is safe, transparent
          and trusted
        </p>
        <span className="text-sm font-medium text-dark/80">
          AMORDIVINA<sup>&copy;</sup> 2023
        </span>
      </div>
    </section>
  );
}
