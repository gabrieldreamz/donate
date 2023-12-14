"use client";

import { AnimatePresence } from "framer-motion";
import DropDownMenu from "./navlinks/DropDownMenu";
import LinksWrapper from "./LinksWrapper";
import { useState } from "react";

export default function MainNavigation() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <section>
      <LinksWrapper toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      {/* DropDown */}
      <div className="lg:hidden">
        {toggleMenu && (
          <div className="Overlay" onClick={() => setToggleMenu(false)} />
        )}
        <AnimatePresence>
          {toggleMenu && <DropDownMenu setToggleMenu={setToggleMenu} />}
        </AnimatePresence>
      </div>
    </section>
  );
}
