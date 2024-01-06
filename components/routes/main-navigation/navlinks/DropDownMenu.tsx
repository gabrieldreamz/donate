import Link from "next/link";
import { linkData } from "./menuData";

import { motion } from "framer-motion";

interface DropDown {
  setToggleMenu: Function;
}

export default function DropDownMenu({ setToggleMenu }: DropDown) {
  const animationData = (i: any) => ({
    initial: { translateX: -20, opacity: 0.5 },
    animate: { translateX: 0, opacity: 1 },
    transition: {
      duration: 0.4,
      delay: i * 0.03,
      type: "spring",
      bounce: 0.4,
    },
  });

  return (
    <motion.ul
      initial={{ opacity: 0.85 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white text-sm  px-8 font-medium absolute w-full py-9 border-t-[1px] border-gray-200 flex flex-col gap-6 z-50"
    >
      {linkData.map((item, i) => (
        <motion.li
          key={item.text}
          initial={animationData(null).initial}
          animate={animationData(null).animate}
          transition={animationData(i).transition}
          exit={{ translateX: -30, opacity: 0.7 }}
        >
          <Link
            className="tracking-wide text-dark TapHighlight block"
            href={item.link}
          >
            {item.text}
          </Link>
        </motion.li>
      ))}
      <hr className="w-full" />
      <Link href="#">
        <motion.li
          initial={animationData(null).initial}
          animate={animationData(null).animate}
          exit={{ translateX: -20, opacity: 0.7 }}
          className="tracking-wide text-dark TapHighlight"
        >
          Volunteer
        </motion.li>
      </Link>
    </motion.ul>
  );
}
