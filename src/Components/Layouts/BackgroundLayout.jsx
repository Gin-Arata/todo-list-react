import { useRef, useState } from "react";
import NavbarLayouts from "./NavbarLayouts";
import ModalCreateList from "./ModalCreateList";

const BackgroundLayout = (props) => {
  const { children, titleNavbar } = props;
  const backgroundLayoutRef = useRef(null);

  return (
    <div className="bg-bgscreen h-screen flex justify-center items-center font-roboto">
      <div className="bg-bgcolorcard w-2/3 h-4/5 rounded-lg overflow-hidden relative" ref={backgroundLayoutRef}>
        <div className="max-w-full min-h-8 bg-slate-700 flex items-center">
          <div className="flex justify-between items-center px-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
            </div>
          </div>
        </div>
        <NavbarLayouts titleNavbar={titleNavbar} backgroundLayout={backgroundLayoutRef} />
        <div className="p-2">{children(backgroundLayoutRef)}</div>
      </div>
    </div>
  );
};

export default BackgroundLayout;
