import { useState } from "react";
import {
  CardTodoList,
  CardTodoListMobile,
} from "../Components/Fragments/CardTodoList";
import BackgroundLayout from "../Components/Layouts/BackgroundLayout";
import ModalDeleteList from "../Components/Layouts/ModalDeleteList";
import { getAllTodoList, getTodoListExample } from "../services/getAllTodoList";
import { deleteTodoListByIndex } from "../services/deleteTodoList";
import ModalEditList from "../Components/Layouts/ModalEditList";
import { editTodoListByIndex } from "../services/editTodoList";
import BackgroundLayoutMobile from "../Components/Layouts/BackgroundLayoutMobile";

const ToDoListPage = () => {
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [todoList] = useState(getAllTodoList);
  const [exampleTodoList] = useState(getTodoListExample);
  const [formDataEdit, setFormDataEdit] = useState([]);
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
  };

  const closeModalEdit = () => {
    setModalEdit(false);
  };

  const openModalDelete = () => {
    setModalDelete(true);
  };

  const closeModalDelete = () => {
    setModalDelete(false);
  };

  const deleteTodo = (index) => {
    deleteTodoListByIndex(index);
  };

  const editTodo = (data) => {
    editTodoListByIndex(data);
  };

  if (window.innerWidth > 768) {
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
  } else {
    if (todoList && todoList.length > 0) {
    } else {
      return (
        <BackgroundLayoutMobile titleNavbar="todolist">
          {exampleTodoList.map((todo) => (
            <>
              <p className="text-md font-semibold">To Do List - {todo.date}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <CardTodoListMobile
                  buttonAble = {{ deleteAble: true, updateAble: true }}
                  key={todo.id}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cumque hic voluptatum quibusdam praesentium eaque ipsa, vitae veritatis commodi earum temporibus, asperiores beatae est enim assumenda, sint quasi quo magni!
                </CardTodoListMobile>
              </div>
            </>
          ))}
        </BackgroundLayoutMobile>
      );
    }
  }
};

export default ToDoListPage;
