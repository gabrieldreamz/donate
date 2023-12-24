// import CenterCard from "@shared/CenterCard";
import DonateTxt from "./DonateTxt";
import DonateImg from "./DonateImg";

export default function DonateComponent() {
  return (
    <section className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center justify-center my-7 lg:my-20">
      <DonateTxt />
      <DonateImg />
    </section>
  );
}
