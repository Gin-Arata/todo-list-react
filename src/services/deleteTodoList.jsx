const deleteTodoListByIndex = (index) => {
  const todoList = JSON.parse(localStorage.getItem("todolist"));
  todoList.splice(index, 1);
  localStorage.setItem("todolist", JSON.stringify(todoList));
  window.location.reload();
};

export { deleteTodoListByIndex };
