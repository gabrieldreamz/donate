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
          className="HamburgerMenuContainer cursor-pointer"
          onClick={() => setToggleMenu(false)}
        >
          <motion.span
            animate={{ translateY: "5px", rotate: 45 }}
            className="HamburgerMenuItems"
          ></motion.span>
          <motion.span
            animate={{ translateY: "-5px", rotate: -45 }}
            className="HamburgerMenuItems"
          ></motion.span>
        </div>
      ) : (
        <div
          className="HamburgerMenuContainer cursor-pointer"
          onClick={() => setToggleMenu(true)}
        >
          <motion.span className="HamburgerMenuItems"></motion.span>
          <motion.span className="w-[60%] h-[2px] bg-dark"></motion.span>
        </div>
      )}
    </>
  );
}
