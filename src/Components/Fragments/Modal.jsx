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
          <div className="w-1/3 h-1/3 bg-bgcolorcardnavbar-500 rounded-md p-4">
            {children}
            <div className="flex justify-end gap-x-4 mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={closeModal}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
