const getTodoListToday = () => {
    const today = formatDate(new Date());
    const listParsed = localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist')) : [];

    return listParsed.filter((todolist) => todolist.date === today);
}

const getTodoListTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDate = formatDate(tomorrow);

    const listParsed = localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist')) : [];

    return listParsed.filter((todolist) => todolist.date === tomorrowDate);
}

const formatDate = (date) => {
    return date.toISOString().split("T")[0];
}

export {getTodoListToday, getTodoListTomorrow};