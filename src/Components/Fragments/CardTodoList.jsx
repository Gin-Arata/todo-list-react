const CardTodoList = (props) => {
  const { children, deleteAble = false, editAble = false, openModalDelete, openModalEdit, classname, deleteTodo } = props;
  
  return (
    <div className={`w-full h-auto rounded-md bg-bgcolorcardnavbar-500 p-2 flex justify-between items-center ${classname}`}>
      <p>{children}</p>
      <div className="flex gap-x-4">
        {editAble && (
          <i className="cursor-pointer text-gray-700 fa fa-edit" onClick={openModalEdit}></i>
        )}
        {deleteAble && (
          <i className="cursor-pointer text-red-600 fa fa-trash" onClick={openModalDelete}></i>
        )}
      </div>
    </div>
  );
};

export default CardTodoList;
