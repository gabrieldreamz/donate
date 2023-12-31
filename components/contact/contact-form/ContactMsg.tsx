import Link from "next/link";
import SocialLinks from "../contact-msg/SocialLinks";

export default function ContactMsg() {
  return (
    <section className="flex flex-col justify-between">
      <div className="grid gap-5">
        <div>
          <p className="text-lg font-medium">Contacts</p>
          <Link
            href="mailto:support@hello.com"
            className="hover:text-blue-500 hover:underline duration-150 text-sm font-medium text-dark/80"
          >
            support@hello.com
          </Link>
        </div>

        <div className="grid gap-2">
          <p className="text-lg font-medium">Follow</p>
          <SocialLinks />
        </div>
      </div>

      <div className="max-w-xs mt-14 md:mt-0 grid gap-3">
        <p className="text-sm font-medium text-dark/80">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
          molestiae repudiandae quibusdam sed nobis assumenda?
        </p>
        <span className="text-sm font-medium text-dark/80">
          FORTHEPPL<sup>&copy;</sup> 2023
        </span>
      </div>
    </section>
  );
}
