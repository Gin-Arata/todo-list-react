import NavbarLayoutsMobile from "./NavbarLayoutsMobile";

const BackgroundLayoutMobile = (props) => {
  const { children, titleNavbar } = props;

  return (
    <div className="bg-bgcolorcard flex flex-col justify-between w-full h-screen overflow-hidden font-roboto">
      <div className="flex flex-col flex-grow p-2 gap-y-2 overflow-y-auto scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-400">{children}</div>
      <NavbarLayoutsMobile titleNavbar={titleNavbar} />
    </div>
  );
};

export default BackgroundLayoutMobile;
