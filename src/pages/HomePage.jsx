import { useState } from "react";
import CardTodoList from "../Components/Fragments/CardTodoList";
import BackgroundLayout from "../Components/Layouts/BackgroundLayout";
import {
  getTodoListToday,
  getTodoListTomorrow,
} from "../services/todoListHome";
import { getAllTodoList, getTodoListExample } from "../services/getAllTodoList";

const HomePage = () => {
  const [allTodoList] = useState(getAllTodoList);
  const [todolistToday] = useState(getTodoListToday);
  const [todolistTomorrow] = useState(getTodoListTomorrow);
  const [exampleTodoList] = useState(getTodoListExample);

  if (allTodoList && allTodoList.length > 0) {
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
            ) : null}

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
  } else {
    return (
      <BackgroundLayout titleNavbar="home">
        {() => (
          <>
            <p className="text-md font-semibold">To Do List - Today</p>
            {exampleTodoList.map((todolist, index) => (
              <CardTodoList classname="mb-2" key={index}>
                {todolist.task}
              </CardTodoList>
            ))}
          </>
        )}
      </BackgroundLayout>
    );
  }
};

export default HomePage;
