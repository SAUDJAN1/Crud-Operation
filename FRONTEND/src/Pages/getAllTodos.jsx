import { useEffect, useState } from "react";

const GetAllTodos = () => {
  const [updateForm, setUpdateForm] = useState({ title: "", author: "" });
  const [todos, getTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const getAllData = async () => {
    const response = await fetch("http://localhost:1000/mern/api");
    const data = await response.json();
    getTodos(data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  const deleteTodo = async (id) => {
    const response = await fetch(`http://localhost:1000/mern/api/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      getAllData();
    }
  };

  const updateTodo = async (id) => {
    const response = await fetch(`http://localhost:1000/mern/api/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateForm),
    });

    const res = await response.json();
    setEditId(null);
    setUpdateForm({ title: "", author: "" });
    getAllData();
  };

  return (
    <>
      {todos.length === 0 ? (
        <h1 className="text-red-700 bg-green-400 w-1/2 flex justify-center my-12 p-12 text-3xl rounded-2xl mx-auto">
          No Data Sorry
        </h1>
      ) : (
        todos.map((value) => (
          <div
            key={value._id}
            className="m-2 bg-green-200 inline-block rounded-2xl p-2"
          >
            {editId === value._id ? (
              <>
                <input
                  type="text"
                  value={updateForm.title}
                  onChange={(e) =>
                    setUpdateForm({ ...updateForm, title: e.target.value })
                  }
                  className="block mb-2 p-1 border"
                  placeholder="Title"
                />
                <input
                  type="text"
                  value={updateForm.author}
                  onChange={(e) =>
                    setUpdateForm({ ...updateForm, author: e.target.value })
                  }
                  className="block mb-2 p-1 border"
                  placeholder="Author"
                />
                <button
                  onClick={() => updateTodo(value._id)}
                  className="bg-blue-400 p-2 rounded-2xl mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditId(null)}
                  className="bg-gray-400 p-2 rounded-2xl"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <p>
                  <span className="text-green-500">Title:</span> {value.title}
                </p>
                <p>
                  <span className="text-green-500">Author:</span> {value.author}
                </p>
                <div className="flex flex-row gap-4 p-2">
                  <button
                    onClick={() => deleteTodo(value._id)}
                    className="bg-red-400 p-2 rounded-2xl hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setEditId(value._id);
                      setUpdateForm({
                        title: value.title,
                        author: value.author,
                      });
                    }}
                    className="bg-emerald-400 p-2 rounded-2xl hover:bg-emerald-700"
                  >
                    Update
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </>
  );
};

export default GetAllTodos;
