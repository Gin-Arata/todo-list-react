import { useState } from "react";
import CardTodoList from "../Components/Fragments/CardTodoList";
import BackgroundLayout from "../Components/Layouts/BackgroundLayout";
import ModalDeleteList from "../Components/Layouts/ModalDeleteList";
import { getAllTodoList, getTodoListExample } from "../services/getAllTodoList";

const ToDoListPage = () => {
  const [modal, setModal] = useState(false);
  const [todoList] = useState(getAllTodoList);
  const [exampleTodoList] = useState(getTodoListExample);

  let groupedTodos = [];

  if (todoList && todoList.length > 0) {
    groupedTodos = todoList.reduce((acc, todo) => {
      if (!acc[todo.date]) {
        acc[todo.date] = [];
      }

      acc[todo.date].push(todo);
      return acc;
    }, []);
  }

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  if (todoList && todoList.length > 0) {
    return (
      <BackgroundLayout titleNavbar="todolist">
        {(backgroundLayoutRef) => (
          <>
            {Object.keys(groupedTodos).map((date) => (
              <div key={date}>
                <p className="text-md font-semibold">To Do List - {date}</p>
                {groupedTodos[date].map((todo, index) => (
                  <CardTodoList
                    classname="mb-2"
                    key={index}
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
  } else {
    return (
      <BackgroundLayout titleNavbar="todolist">
        {() => (
          <>
            {exampleTodoList.map((todolist, index) => (
              <>
                <p className="text-md font-semibold">
                  To Do List - {todolist.date}
                </p>
                <CardTodoList classname="mb-2" key={index}>
                  {todolist.task}
                </CardTodoList>
              </>
            ))}
          </>
        )}
      </BackgroundLayout>
    );
  }
};

export default ToDoListPage;
