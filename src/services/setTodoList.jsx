const setTodoList = (todolist) => {
    const existingTodoList = localStorage.getItem('todolist');
    const updatedTodoList = existingTodoList ? [...JSON.parse(existingTodoList), ...todolist] : todolist;

    localStorage.setItem('todolist', JSON.stringify(updatedTodoList));
    window.location.reload();
}

export { setTodoList };