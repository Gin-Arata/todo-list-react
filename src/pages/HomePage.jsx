import { useState } from "react";
import CardTodoList from "../Components/Fragments/CardTodoList";
import BackgroundLayout from "../Components/Layouts/BackgroundLayout";
import { getTodoListToday, getTodoListTomorrow } from "../services/todoListHome";

const HomePage = () => {
  const [todolistToday] = useState(getTodoListToday);
  const [todolistTomorrow] = useState(getTodoListTomorrow);

  return (
    <BackgroundLayout titleNavbar="home">
      {() => (
        <>
          <p className="text-md font-semibold">To Do List - Today</p>
          {todolistToday.map((todolist) => (
            <CardTodoList classname="mb-2" key={todolist.id}>
              {todolist.task}
            </CardTodoList>
          ))}
          <p className="text-md font-semibold">To Do List - Tomorrow</p>
          {todolistTomorrow.map((todolist) => (
            <CardTodoList classname="mb-2" key={todolist.id}>
              {todolist.task}
            </CardTodoList>
          ))}
        </>
      )}
    </BackgroundLayout>
  );
};

export default HomePage;
