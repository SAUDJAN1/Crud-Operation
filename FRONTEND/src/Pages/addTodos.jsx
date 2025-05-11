import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddTodos = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    title: "",
    author: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const submitData = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:1000/mern/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      setError("");
      const res = await response.json();
      alert(res.msg);
      navigate("/getAllTodos");
    } else {
      const error = await response.json();
      setError(error.err);
    }
  };
  return (
    <>
      <div className="mx-auto mt-2 w-1/2  flex justify-center bg-amber-100 rounded-2xl ">
        <form
          action=""
          className="flex flex-col m-4"
          autoComplete="off"
          onSubmit={submitData}
        >
          <input
            type="text"
            name="title"
            required
            value={user.title}
            onChange={handleChange}
            placeholder="Write down Todo"
            className="border-2 rounded-2xl p-4 w-2xl box-border text-2xl"
          />
          <input
            type="text"
            name="author"
            placeholder="Who add this Todo"
            required
            value={user.author}
            onChange={handleChange}
            className="border-2 rounded-2xl p-4 mt-2 box-border text-2xl"
          />
          <input
            type="submit"
            value="Submit"
            className="border-2 rounded-2xl p-2 mt-2 w-24 flex mx-auto hover:bg-red-700 hover:duration-200 text-2xl"
          />
          {error && <p className="text-red-300 p-2">{error}</p>}
        </form>
      </div>
      <div></div>
    </>
  );
};
export default AddTodos;
