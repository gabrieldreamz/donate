import Link from "next/link";

export default function Volunteer() {
  return (
    <section className="w-full py-20 md:py-32 bgImage text-white text-center flex flex-col gap-5 mb-10">
      <h1 className="text-3xl md:text-4xl">Become a Volunteer</h1>
      <p>Join us for a better life and beautiful future.</p>
      <Link
        href=""
        className="text-center bg-blue-500 w-44 mx-auto text-white rounded-[2rem] font-medium tracking-wide mt-5 py-3 hover:opacity-90 active:opacity-80 duration-100"
      >
        Join us!
      </Link>
    </section>
  );
}
