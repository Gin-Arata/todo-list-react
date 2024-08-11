const NavbarLayouts = (props) => {
  const { titleNavbar } = props;

  return (
    <div className="max-w-full min-h-10 bg-bgcolorcardnavbar flex items-end gap-x-1">
      {/* when selected */}
      <div className={`min-h-8 w-48 rounded-t-xl flex justify-between items-center ${titleNavbar === "home" ? "bg-bgcolorcard" : "bg-bgcolorcardnavbar hover:bg-bgcolorcard"}`}>
        <p className="px-2">Home</p>
        <i className="fa fa-times-circle text-slate-300 px-2"></i>
      </div>
      {/* when not selected */}
      <div className={`min-h-8 w-48 rounded-t-xl flex justify-between items-center ${titleNavbar === "???" ? "bg-bgcolorcard" : "bg-bgcolorcardnavbar hover:bg-bgcolorcard"}`}>
        <p className="px-2">Home</p>
        <i className="fa fa-times-circle text-slate-300 px-2"></i>
      </div>
      <div className="border-l border-slate-400 h-8 mx-1"></div>
      <div className="bg-bgcolorcardnavbar min-h-8 w-8 rounded-t-xl flex justify-center items-center hover:bg-bgcolorcard">
        <i className="fa fa-plus-circle text-slate-300 px-2"></i>
      </div>
    </div>
  );
};

export default NavbarLayouts;
