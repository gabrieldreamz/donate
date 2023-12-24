import Title from "./donateTxt-component/Title";
import ProgressBar from "./donateTxt-component/ProgressBar";
import Description from "./donateTxt-component/Description";
import PriceCarousel from "./donateTxt-component/PriceCarousel";
import Share from "./donateTxt-component/Share";

export default function DonateTxt() {
  return (
    <section className="lg:max-w-lg flex flex-col gap-5 px-5 lg:px-0">
      <Title />
      <div className="lg:max-w-sm flex flex-col gap-3">
        <ProgressBar />
        <Description />
        <PriceCarousel />
        <button className="text-center w-40 lg:w-auto bg-blue-500 text-white rounded-[2rem] font-medium tracking-wide  py-3 hover:opacity-90 active:opacity-80 duration-100">
          Donate now
        </button>
        <Share />
      </div>
    </section>
  );
}
