const CardTodoList = (props) => {
  const {
    children,
    deleteAble = false,
    editAble = false,
    openModalDelete,
    openModalEdit,
    classname,
  } = props;

  return (
    <div
      className={`w-full h-auto rounded-md bg-bgcolorcardnavbar-500 p-2 flex justify-between items-center ${classname}`}
    >
      <p>{children}</p>
      <div className="flex gap-x-4">
        {editAble && (
          <i
            className="cursor-pointer text-gray-700 fa fa-edit"
            onClick={openModalEdit}
          ></i>
        )}
        {deleteAble && (
          <i
            className="cursor-pointer text-red-600 fa fa-trash"
            onClick={openModalDelete}
          ></i>
        )}
      </div>
    </div>
  );
};

const CardTodoListMobile = (props) => {
  const { children, buttonAble = { deleteAble: false, updateAble: false }, openModal = {edit: null, update: null} } = props;

  return (
    <div className="bg-bgcolorcardnavbar-500 h-32 overflow-hidden rounded overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-400">
      {(buttonAble.deleteAble == true || buttonAble.updateAble == true) && (
        <div className="flex items-center justify-end gap-x-5 bg-slate-400 w-full h-6 sticky top-0 pe-4">
          {buttonAble.updateAble && (<i className="cursor-pointer text-gray-700 fa fa-edit" onClick={openModal.edit}></i>)}
          {buttonAble.deleteAble && (<i className="cursor-pointer text-red-600 fa fa-trash" onClick={openModal.update}></i>)}
        </div>
      )}
      <p className="m-1">{children}</p>
    </div>
  );
};

export { CardTodoList, CardTodoListMobile };
