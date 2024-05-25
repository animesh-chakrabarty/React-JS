import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex flex-col gap-10 h-[100vh] w-[100vw] items-center justify-center ">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
