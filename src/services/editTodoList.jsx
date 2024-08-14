const editTodoListByIndex = (newTodoList) => {
    const previousTodoList = JSON.parse(localStorage.getItem('todolist'));
    const uniqueId = newTodoList.id;

    previousTodoList.forEach(todo => {
        if(todo.id === uniqueId) {
            todo.task = newTodoList.task;
            todo.date = newTodoList.date;
            localStorage.setItem('todolist', JSON.stringify(previousTodoList));
        }
    });

    window.location.reload();
}

export {editTodoListByIndex}