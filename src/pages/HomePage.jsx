import { useState } from "react";
import {
  CardTodoList,
  CardTodoListMobile,
} from "../Components/Fragments/CardTodoList";
import BackgroundLayout from "../Components/Layouts/BackgroundLayout";
import {
  getTodoListToday,
  getTodoListTomorrow,
} from "../services/todoListHome";
import { getAllTodoList, getTodoListExample } from "../services/getAllTodoList";
import BackgroundLayoutMobile from "../Components/Layouts/BackgroundLayoutMobile";

const HomePage = () => {
  const [allTodoList] = useState(getAllTodoList);
  const [todolistToday] = useState(getTodoListToday);
  const [todolistTomorrow] = useState(getTodoListTomorrow);
  const [exampleTodoList] = useState(getTodoListExample);

  if (window.innerWidth > 768) {
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
  } else {
    // ubah if nanti menjadi allTodoList
    if (allTodoList && allTodoList.length > 0) {
      return (
        <BackgroundLayoutMobile>
          <div className="">
            <p className="text-md font-semibold">To Do List - Today</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <CardTodoListMobile>Testing</CardTodoListMobile>
            </div>
          </div>
          <div className="">
            <p className="text-md font-semibold">To Do List - Tomorrow</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <CardTodoListMobile>Testing</CardTodoListMobile>
            </div>
          </div>
        </BackgroundLayoutMobile>
      );
    } else {
      return (
        <BackgroundLayoutMobile>
          <p className="text-md font-semibold">To Do List - Today</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {exampleTodoList.map((todo) => (
              <CardTodoListMobile key={todo.id}>{todo.task}</CardTodoListMobile>
            ))}
          </div>
        </BackgroundLayoutMobile>
      );
    }
  }
};

export default HomePage;
