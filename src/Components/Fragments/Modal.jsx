import { useEffect, useState } from "react";

const Modal = (props) => {
  const { children, isOpen, closeModal, backgroundLayout } = props;

  const [layoutSize, setLayoutSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (backgroundLayout && backgroundLayout.current) {
      const { offsetWidth, offsetHeight } = backgroundLayout.current;
      if (offsetWidth && offsetHeight) {
        setLayoutSize({ width: offsetWidth, height: offsetHeight });
      }
    }
  }, [backgroundLayout, isOpen]);

  console.log(layoutSize.width);
  return (
    <>
      {isOpen && (
        <div
          className="fixed rounded-lg bg-black bg-opacity-50 z-50 flex justify-center items-center"
          style={{ width: layoutSize.width, height: layoutSize.height }}
        >
          <div className="w-96 h-auto bg-bgcolorcardnavbar-500 rounded-md overflow-hidden">
            <div className="max-w-full min-h-8 bg-slate-700 flex items-center">
              <div className="flex justify-between items-center px-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-2 cursor-pointer" onClick={closeModal}></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                </div>
              </div>
            </div>
            <div className="p-4">
              {children}
              <div className="flex justify-end gap-x-4 mt-4"> 
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                  onClick={closeModal}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
