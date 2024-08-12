import CardTodoList from "../Components/Fragments/CardTodoList";
import BackgroundLayout from "../Components/Layouts/BackgroundLayout";

const HomePage = () => {
  return (
    <BackgroundLayout titleNavbar="home">
      <p className="text-md font-semibold">To Do List - Today</p>
      <CardTodoList>
        Hello, this is an example of a to-do list.
      </CardTodoList>
      <p className="text-md font-semibold">To Do List - Tomorrow</p>
      <CardTodoList>
        Hello, this is an example of a to-do list.
      </CardTodoList>
    </BackgroundLayout>
  );
};

export default HomePage;
