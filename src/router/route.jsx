import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ToDoListPage from "../pages/ToDoListPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todolist" element={<ToDoListPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
