const CardTodoList = (props) => {
  const { children, deleteAble = false } = props;

  return (
    <div className="w-full h-auto rounded-md bg-bgcolorcardnavbar-500 p-2 flex justify-between items-center">
      <p>{children}</p>
      {deleteAble && (
        <i className="cursor-pointer text-red-600 fa fa-trash"></i>
      )}
    </div>
  );
};

export default CardTodoList;
