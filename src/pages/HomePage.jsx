import { useState } from "react";
import CardTodoList from "../Components/Fragments/CardTodoList";
import BackgroundLayout from "../Components/Layouts/BackgroundLayout";
import {
  getTodoListToday,
  getTodoListTomorrow,
} from "../services/todoListHome";
import { getTodoListExample } from "../services/getAllTodoList";

const HomePage = () => {
  const [todolistToday] = useState(getTodoListToday);
  const [todolistTomorrow] = useState(getTodoListTomorrow);
  const [exampleTodoList] = useState(getTodoListExample);

  return (
    <BackgroundLayout titleNavbar="home">
      {() => (
        <>
          {todolistToday && todolistToday.length > 0 ? (
            <>
              <p className="text-md font-semibold">To Do List - Today</p>
              {todolistToday.map((todolist, index) => (
                <CardTodoList classname="mb-2" key={index}>
                  {todolist.task}
                </CardTodoList>
              ))}
            </>
          ) : (
            <>
              <p className="text-md font-semibold">To Do List - Today</p>
              {exampleTodoList.map((todolist, index) => (
                <CardTodoList classname="mb-2" key={index}>
                  {todolist.task}
                </CardTodoList>
              ))}
            </>
          )}

          {todolistTomorrow && todolistTomorrow.length > 0 ? (
            <>
              <p className="text-md font-semibold">To Do List - Tomorrow</p>
              {todolistTomorrow.map((todolist, index) => (
                <CardTodoList classname="mb-2" key={index}>
                  {todolist.task}
                </CardTodoList>
              ))}
            </>
          ) : null}
        </>
      )}
    </BackgroundLayout>
  );
};

export default HomePage;
