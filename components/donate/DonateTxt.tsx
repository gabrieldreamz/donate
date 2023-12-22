import Title from "./donateTxt-component/Title";
import ProgressBar from "./donateTxt-component/ProgressBar";
import Description from "./donateTxt-component/description";
import PriceCarousel from "./donateTxt-component/PriceCarousel";
import Share from "./donateTxt-component/Share";

export default function DonateTxt() {
  return (
    <section>
      <Title />
      <ProgressBar />
      <Description />
      <PriceCarousel />
      <PriceCarousel />
      <button>Donate now</button>
      <Share />
    </section>
  );
}
