const setTodoList = (todolist) => {
    const existingTodoList = localStorage.getItem('todolist');
    const updatedTodoList = existingTodoList ? [...JSON.parse(existingTodoList), ...todolist] : todolist;

    localStorage.setItem('todolist', JSON.stringify(updatedTodoList));
    window.location.reload();
}

const getNewId = () => {
    const existingTodoList = localStorage.getItem('todolist');
    const todoList = existingTodoList ? JSON.parse(existingTodoList) : [];

    if(todoList.length === 0) {
        return 1;
    } else {
        return todoList.length + 1;
    }
}

export { setTodoList, getNewId };