import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlice";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="flex justify-between w-full px-8 py-3 text-xl text-black bg-gray-100 cursor-pointer">
      <h1>{todo.task}</h1>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="px-4 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-400 "
      >
        X
      </button>
    </div>
  );
};

export default TodoCard;
