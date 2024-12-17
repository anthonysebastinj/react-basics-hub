import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const onAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const forDelete = (indexGot) => {
    setTodos(todos.filter((value, index) => index !== indexGot));
  };

  return (
    <div>
      <h1>Sample To-do App!</h1>
      <TodoInput onAddTodo={onAddTodo} />
      <TodoList forDelete={forDelete} todos={todos} />
    </div>
  );
}

export default TodoApp;
