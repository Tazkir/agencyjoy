import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function NavBar() {
  return (
    <header className="flex-no-wrap fixed top-6 z-50 w-full px-5">
      <div className="w-full hidden md:flex justify-center items-center">
        <DesktopHeader />
      </div>
      <div className="w-full flex md:hidden justify-center items-center">
        <MobileHeader />
      </div>
    </header>
  );
}

export default NavBar;
