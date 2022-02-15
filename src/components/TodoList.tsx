import React from "react";
import "../App.css";
import { Todo } from "../model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (

      <ul className="todos">
        {todos.map((item) => (
          <li className="singleTodo" key={item.id}>{item.todo}</li>
        ))}
      </ul>
 
  );
};

export default TodoList;
