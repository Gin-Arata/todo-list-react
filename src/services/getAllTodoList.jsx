import dataTodoList from "../data/data-todolist.json";

const getAllTodoList = () => {
  return localStorage.getItem("todolist")
    ? JSON.parse(localStorage.getItem("todolist"))
    : dataTodoList.todolist;
};

const getTodoListExample = () => {
  return dataTodoList.todolist;
};

export { getAllTodoList, getTodoListExample };
