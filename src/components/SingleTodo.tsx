import React from "react";
import { Todo } from "../model";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDoneOutline } from "react-icons/md";
import { CgTrash } from "react-icons/cg";
import '../App.css';


type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

  const handleDone = (id: number) => {
    console.log('in handleDone:', id);
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
    console.log('todo with id', todo.id,'...is it done?:', todo.isDone);
  }

  return (
    <form className="todoSingle">
      {/* <h2 className="todoSingleText">{todo.isDone ? <s><i>{todo.todo}</i></s> : <b>{todo.todo}</b>}</h2> */}
      {todo.isDone ? <h2 className="todoSingleTextDone">{todo.todo}</h2> : <h2 className="todoSingleText">{todo.todo}</h2>}
      <div className="iconBlock">
        <span className="icon">
          <AiOutlineEdit />
        </span>
 
        <span className="icon">
          <CgTrash />
        </span>

        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDoneOutline />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
