import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="w-[600px] flex items-center justify-center ">
      <div className="flex flex-col w-full gap-2">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
