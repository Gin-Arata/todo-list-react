const ButtonElement = (props) => {
    const { children, type, classname } = props;

  return (
    <div className="flex justify-end gap-x-4 mt-4">
      <button
        type={type}
        className={`bg-green-500 text-white px-4 py-2 rounded-md ${classname}`}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonElement;
