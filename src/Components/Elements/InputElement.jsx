const InputElement = (props) => {
  const { name, placeholder, type, labelValue } = props;

  return (
    <div className="mb-2">
      <label htmlFor={name}>{labelValue}</label>
      <input
        type={type}
        className="mt-2 focus:outline-none focus:shadow-md w-full bg-bgcolorcardnavbar-400 rounded-md p-2 placeholder:text-slate-500"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputElement;
