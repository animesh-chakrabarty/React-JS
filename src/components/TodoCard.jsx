import React from "react";
import Button from "./Button";

const TodoCard = ({ task }) => {
  return (
    <div className="flex justify-between w-full px-8 py-3 text-xl text-black bg-gray-100 cursor-pointer">
      <h1>{task}</h1>
      <Button title={"X"} />
    </div>
  );
};

export default TodoCard;
