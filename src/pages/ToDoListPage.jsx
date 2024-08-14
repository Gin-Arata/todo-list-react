import { useState } from "react";
import CardTodoList from "../Components/Fragments/CardTodoList";
import BackgroundLayout from "../Components/Layouts/BackgroundLayout";
import ModalDeleteList from "../Components/Layouts/ModalDeleteList";
import { getAllTodoList, getTodoListExample } from "../services/getAllTodoList";
import { deleteTodoListByIndex } from "../services/deleteTodoList";
import ModalEditList from "../Components/Layouts/ModalEditList";
import { editTodoListByIndex } from "../services/editTodoList";

const ToDoListPage = () => {
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [todoList] = useState(getAllTodoList);
  const [exampleTodoList] = useState(getTodoListExample);
  const [formDataEdit, setFormDataEdit] = useState([]);
  const [currentEditIndex, setCurrentEditIndex] = useState([]);
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

  const openModalEdit = (data) => {
    console.log(data);
    setFormDataEdit(data);
    setModalEdit(true);
  }

  const closeModalEdit = () => {
    setModalEdit(false);
  }

  const openModalDelete = () => {
    setModalDelete(true);
  };

  const closeModalDelete = () => {
    setModalDelete(false);
  };

  const deleteTodo = (index) => {
    deleteTodoListByIndex(index);
  }

  const editTodo = (data) => {
    editTodoListByIndex(data);
  }

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
                    editAble={true}
                    openModalDelete={openModalDelete}
                    openModalEdit={() => openModalEdit(todo)}
                  >
                    {todo.task}
                  </CardTodoList>
                ))}
              </div>
            ))}

            <ModalDeleteList
              isOpen={modalDelete}
              closeModal={closeModalDelete}
              deleteTodo={deleteTodo}
              backgroundLayout={backgroundLayoutRef}
            />

            <ModalEditList
              isOpen={modalEdit}
              closeModal={closeModalEdit}
              formData={formDataEdit}
              setFormData={setFormDataEdit}
              onSubmit={editTodo}
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
