import { useState } from "react";
import CardTodoList from "../Components/Fragments/CardTodoList";
import BackgroundLayout from "../Components/Layouts/BackgroundLayout";
import ModalDeleteList from "../Components/Layouts/ModalDeleteList";

const ToDoListPage = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <BackgroundLayout titleNavbar="todolist">
      {(backgroundLayoutRef) => (
        <>
        {/* pengambilan sesuai date menggunakan if else yang memiliki date yang sama */}
          <p className="text-md font-semibold">To Do List - Date</p>
          <CardTodoList
            deleteAble={true}
            openModalDelete={openModal}
            editAble={true}
          >
            Hello, this is an example of a to-do list.
          </CardTodoList>

          <ModalDeleteList
            isOpen={modal}
            closeModal={closeModal}
            backgroundLayout={backgroundLayoutRef}
          />
        </>
      )}
    </BackgroundLayout>
  );
};

export default ToDoListPage;
