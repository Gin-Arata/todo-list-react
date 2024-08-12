import CardTodoList from "../Components/Fragments/CardTodoList";
import BackgroundLayout from "../Components/Layouts/BackgroundLayout";

const ToDoListPage = () => {
  return (
    <BackgroundLayout titleNavbar="todolist">
      <p className="text-md font-semibold">To Do List - Date</p>
      <CardTodoList deleteAble={true} editAble={true}>
        Hello, this is an example of a to-do list.
      </CardTodoList>
    </BackgroundLayout>
  );
};

export default ToDoListPage;
