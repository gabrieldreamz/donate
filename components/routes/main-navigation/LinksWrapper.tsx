import Logo from "./Logo";
import Navlinks from "./navlinks/navlinks";
import Profile from "./profile/Profile";
import HamburgerMenu from "./navlinks/HamburgerMenu";
export default function LinksWrapper({
  toggleMenu,
  setToggleMenu,
}: {
  toggleMenu: boolean;
  setToggleMenu: Function;
}) {
  return (
    <section
      className={`HeaderContainer ${
        toggleMenu ? "bg-white" : "bg-transparent"
      }`}
    >
      <Navlinks />
      <div className="flex items-center gap-5 lg:order-1">
        <HamburgerMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <Logo />
      </div>
      <Profile />
    </section>
  );
}
