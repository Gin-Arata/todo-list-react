import NavbarLayoutsMobile from "./NavbarLayoutsMobile";
import { useRef } from "react";

const BackgroundLayoutMobile = (props) => {
  const { children, titleNavbar } = props;
  const backgroundLayoutRef = useRef(null);

  return (
    <div className="bg-bgcolorcard flex flex-col justify-between w-full h-screen overflow-hidden font-roboto" ref={backgroundLayoutRef}>
      <div className="flex flex-col flex-grow p-2 gap-y-2 overflow-y-auto scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-400">{children(backgroundLayoutRef)}</div>
      <NavbarLayoutsMobile titleNavbar={titleNavbar} backgroundLayout={backgroundLayoutRef} />
    </div>
  );
};

export default BackgroundLayoutMobile;
