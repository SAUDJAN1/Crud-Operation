import AddTodos from "./Pages/addTodos";
import Navbar from "./Components/Navbar";
import GetallTodos from "./Pages/getAllTodos";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/create" element={<AddTodos />} />
        <Route path="/getAllTodos" element={<GetallTodos />} />
      </Routes>
    </>
  );
};
export default App;
