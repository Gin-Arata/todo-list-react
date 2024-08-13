import dataTodoList from "../data/data-todolist.json";

const getTodoListToday = () => {
    const today = formatDate(new Date());
    
    return dataTodoList.todolist.filter((todolist) => todolist.date === today);
}

const getTodoListTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDate = formatDate(tomorrow);

    return dataTodoList.todolist.filter((todolist) => todolist.date === tomorrowDate);
}

const formatDate = (date) => {
    return date.toISOString().split("T")[0];
}

export {getTodoListToday, getTodoListTomorrow};