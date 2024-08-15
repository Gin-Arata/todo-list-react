import { useState } from "react";
import { Link } from "react-router-dom";
import ModalCreateList from "./ModalCreateList";
import { setTodoList } from "../../services/setTodoList";

const NavbarLayoutsMobile = (props) => {
  const { titleNavbar, backgroundLayout } = props;
  const [modalCreate, setModalCreate] = useState(false);

  const handleNewTodo = (newTodo) => {
    const todoArray = Array.isArray(newTodo) ? newTodo : [newTodo];
    setTodoList(todoArray);
    closeModalCreate();
  }

  const openModalCreate = () => {
    setModalCreate(true);
  };

  const closeModalCreate = () => {
    setModalCreate(false);
  };

  return (
    <div className="w-full h-12 bg-bgcolorcardnavbar-500 flex justify-center items-center gap-x-10">
      <Link to="/">
        <i
          className={
            titleNavbar === "home"
              ? "fa fa-home fa-xl text-white"
              : "fa fa-home fa-xl"
          }
        ></i>
      </Link>
      <div className="relative mb-5 mx-5 cursor-pointer">
        <div className="w-16 h-16 bg-bgcolorcardnavbar-500 rounded-full flex justify-center items-center absolute -top-8 left-1/2 transform -translate-x-1/2">
          <i className="fa fa-circle-plus fa-3x" onClick={openModalCreate}></i>
        </div>
      </div>
      <Link to="/todolist">
        <i
          className={
            titleNavbar === "todolist"
              ? "fa fa-calendar-days fa-xl text-white"
              : "fa fa-calendar-days fa-xl"
          }
        ></i>
      </Link>

      <ModalCreateList
        isOpen={modalCreate}
        closeModal={closeModalCreate}
        backgroundLayout={backgroundLayout}
        onSubmit={handleNewTodo}
      />
    </div>
  );
};

export default NavbarLayoutsMobile;
