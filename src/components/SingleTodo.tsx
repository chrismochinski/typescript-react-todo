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
  return (
    <form className="todoSingle">
      <h2 className="todoSingleText">{todo.todo}</h2>
      <div className="iconBlock">
        <span className="icon">
          <AiOutlineEdit />
        </span>
 
        <span className="icon">
          <CgTrash />
        </span>

        <span className="icon">
          <MdDoneOutline />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
