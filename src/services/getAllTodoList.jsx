import dataTodoList from '../data/data-todolist.json';

const getAllTodoList = () => {
    return dataTodoList.todolist;
}

export { getAllTodoList };