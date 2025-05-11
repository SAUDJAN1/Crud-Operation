import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <ul className="flex flex-row justify-center gap-12 bg-amber-100 p-4 border-2 rounded-2xl w-full box-border">
        <Link
          to="/create"
          className="text-2xl cursor-pointer hover:text-green-400 rounded-2xl hover:duration-200"
        >
          Add Todos
        </Link>
        <Link
          to="/getAllTodos"
          className="text-2xl cursor-pointer hover:text-green-400 rounded-2xl hover:duration-200"
        >
          Get All Todos
        </Link>
      </ul>
    </>
  );
};
export default Navbar;
