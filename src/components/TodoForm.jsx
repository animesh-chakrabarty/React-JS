import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[600px] flex justify-center gap-[30px]"
    >
      <input
        type="text"
        placeholder="Enter a task... "
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="bg-white px-4 py-2 rounded-lg text-black outline-none w-[350px]"
      />
      <Button title={"Add"} />
    </form>
  );
};

export default TodoForm;
