import { useState } from "react";
import CardTodoList from "../Components/Fragments/CardTodoList";
import BackgroundLayout from "../Components/Layouts/BackgroundLayout";
import ModalDeleteList from "../Components/Layouts/ModalDeleteList";
import { getAllTodoList } from "../services/getAllTodoList";

const ToDoListPage = () => {
  const [modal, setModal] = useState(false);
  const [todoList] = useState(getAllTodoList);

  const groupedTodos = todoList.reduce((acc, todo) => {
    if(!acc[todo.date]) {
      acc[todo.date] = [];
    }

    acc[todo.date].push(todo);
    return acc;
  }, []);

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
          {Object.keys(groupedTodos).map((date) => (
            <div key={date}>
              <p className="text-md font-semibold">To Do List - {date}</p>
              {groupedTodos[date].map((todo) => (
                <CardTodoList
                  classname="mb-2"
                  key={todo.id}
                  deleteAble={true}
                  openModalDelete={openModal}
                  editAble={true}
                >
                  {todo.task}
                </CardTodoList>
              ))}
            </div>
          ))}

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
