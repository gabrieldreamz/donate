import IntroSection from "@components/home/intro-section/IntroSection";
import Categories from "@components/home/categories/Categories";
import SubIntro from "@components/home/sub-Intro/SubIntro";
import Events from "@components/home/events/Events";
import Trust from "@components/home/trust/Trust";
import About from "@components/home/about-us/About";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden noselect">
        <IntroSection />
        <Categories />
        <SubIntro />
        <Events />
        <Trust />
        <About />
      </main>
    </>
  );
}
