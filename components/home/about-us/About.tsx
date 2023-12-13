import CenterCard from "@shared/CenterCard";
import Link from "next/link";

export default function About() {
  return (
    <section className="mt-28">
      <CenterCard>
        <div className="flex flex-col md:flex-row px-2  justify-between text-center md:text-start gap-5 md:gap-0">
          <div className="flex flex-col gap-3 lg:gap-0">
            <p className="text-blue-500 font-medium">About us</p>
            <h1 className="text-3xl lg:text-4xl max-w-md px-5 md:px-0">
              Your help will be very useful for them
            </h1>
          </div>
          <div>
            <p className="max-w-lg text-dark/80 font-medium mb-10">
              We are safe, transparent and trusted donation platform with more
              than 10+ years of experience. we have helped people around the
              world to live safely and in peace
            </p>
            <Link href="" className="buttonConfig px-5 bg-blue-500">
              Learn more
            </Link>
          </div>
        </div>
      </CenterCard>
      {/* Video */}
      <div className="w-full h-80 md:h-[460px] rounded-[2rem] mt-28  mb-32">
        <video
          autoPlay
          loop
          playsInline
          muted
          className="w-full h-full object-cover"
        >
          <source src="/vv.mp4" type="video/mp4" />
          Your browser does not support html video element
        </video>
      </div>
    </section>
  );
}
