import CenterCard from "@shared/CenterCard";

export default function IntroMsg() {
  return (
    <CenterCard>
      <div className="flex flex-col gap-3 mb-12 mt-7 md:mt-16">
        <h1 className="text-4xl sm:text-5xl text-center 2xl:text-7xl text-dark">
          CONTACT US.
        </h1>
        <p className="text-dark text-center">
          <span className="font-medium">Have a question?</span> Feel free to ask
          using the form below, we&apos;ll get back to you within 48 hours.
        </p>
      </div>
    </CenterCard>
  );
}
