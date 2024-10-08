import { Link } from "react-router-dom";
import { useState } from "react"; 
import ModalCreateList from "./ModalCreateList";
import { setTodoList } from "../../services/setTodoList";

const NavbarLayouts = (props) => {
  const { titleNavbar, backgroundLayout } = props;
  const [modal, setModal] = useState(false);

  const handleNewTodo = (newTodo) => {
    const todoArray = Array.isArray(newTodo) ? newTodo : [newTodo];
    setTodoList(todoArray);
    closeModal();
  }

  const openModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  return (
    <div className="max-w-full min-h-10 bg-bgcolorcardnavbar-500 flex items-end gap-x-1">
      <Link to="/">
        <div
          className={`cursor-pointer min-h-8 w-48 rounded-t-xl flex justify-between items-center ${
            titleNavbar === "home"
              ? "bg-bgcolorcard font-semibold"
              : "bg-bgcolorcardnavbar-500 hover:bg-bgcolorcard text-slate-800 hover:text-slate-300"
          }`}
        >
          <p className="px-2 text-sm">Home</p>
          <i className="fa fa-times-circle text-slate-300 px-2"></i>
        </div>
      </Link>
      <Link to="/todolist">
        <div
          className={`cursor-pointer min-h-8 w-48 rounded-t-xl flex justify-between items-center ${
            titleNavbar === "todolist"
              ? "bg-bgcolorcard font-semibold"
              : "bg-bgcolorcardnavbar-500 hover:bg-bgcolorcard text-slate-800 hover:text-slate-300"
          }`}
        >
          <p className="px-2 text-sm">All To Do List</p>
          <i className="fa fa-times-circle text-slate-300 px-2"></i>
        </div>
      </Link>
      <div className="border-l border-slate-400 h-8 mx-1"></div>
      <div className="cursor-pointer bg-bgcolorcardnavbar min-h-8 w-8 rounded-t-xl flex justify-center items-center hover:bg-bgcolorcard" onClick={openModal}>
        <i className="fa fa-plus-circle text-slate-300 px-2"></i>
      </div>

      <ModalCreateList isOpen={modal} closeModal={closeModal} backgroundLayout={backgroundLayout} onSubmit={handleNewTodo} />
    </div>
  );
};

export default NavbarLayouts;
