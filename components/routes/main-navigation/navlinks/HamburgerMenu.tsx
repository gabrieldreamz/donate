import { motion } from "framer-motion";

interface Menu {
  toggleMenu: boolean;
  setToggleMenu: Function;
}

export default function HamburgerMenu({ toggleMenu, setToggleMenu }: Menu) {
  const animationData = {
    transition: { duration: 0.05, type: "spring" },
  };

  return (
    <>
      {toggleMenu ? (
        <div
          className="HamburgerMenuContainer"
          onClick={() => setToggleMenu(false)}
        >
          <motion.span
            animate={{ rotate: 45 }}
            className="HamburgerMenuItems"
          ></motion.span>
          <motion.span
            animate={{ rotate: -45 }}
            className="HamburgerMenuItems"
          ></motion.span>
        </div>
      ) : (
        <div
          className="HamburgerMenuContainer"
          onClick={() => setToggleMenu(true)}
        >
          <motion.span
            transition={animationData.transition}
            className="HamburgerMenuItems"
          ></motion.span>
          <span className="w-[60%] h-[2px] bg-dark"></span>
        </div>
      )}
    </>
  );
}
