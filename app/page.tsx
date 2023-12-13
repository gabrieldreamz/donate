"use client";

import { useState } from "react";

import MainNavigation from "@components/routes/main-navigation/MainNavigation";
import DropDownMenu from "@components/routes/main-navigation/navlinks/DropDownMenu";

import { AnimatePresence } from "framer-motion";
import IntroSection from "@components/home/intro-section/IntroSection";
import Categories from "@components/home/categories/Categories";
import SubIntro from "@components/home/sub-Intro/SubIntro";
import Events from "@components/home/events/Events";
import Trust from "@components/home/trust/Trust";
import About from "@components/home/about-us/About";

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <main className="overflow-hidden bg-gray-100 noselect">
        <MainNavigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        {/* DropDown */}
        <div className="lg:hidden">
          {toggleMenu && (
            <div className="Overlay" onClick={() => setToggleMenu(false)} />
          )}
          <AnimatePresence>
            {toggleMenu && <DropDownMenu setToggleMenu={setToggleMenu} />}
          </AnimatePresence>
        </div>
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
