const InputElement = (props) => {
  const { name, value, placeholder, type, labelValue, onChange = () => {} } = props;

  return (
    <div className="mb-2">
      <label htmlFor={name}>{labelValue}</label>
      <input
        type={type}
        className="mt-2 focus:outline-none focus:shadow-md w-full bg-bgcolorcardnavbar-400 rounded-md p-2 placeholder:text-slate-500"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputElement;
