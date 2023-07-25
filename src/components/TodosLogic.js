import React, { useState } from 'react';

import InputTodo from './InputTodo';
import TodoItem from './TodoItem';
// other imported components here

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  // Remove the unused 'uuidv4' import since it is not used in this component

  let todoIdCounter = 4;

  const addTodo = (title) => {
    const newTodo = {
      id: todoIdCounter,
      title,
      completed: false,
    };
    todoIdCounter += 1; // Increment the id counter for the next todo using operator assignment
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="logic">
      <InputTodo addTodo={addTodo} />

      <ul className="list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} delTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodosLogic;
