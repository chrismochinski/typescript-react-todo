import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDoneOutline, MdCheck } from "react-icons/md";
import { CgTrash } from "react-icons/cg";
import "../App.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodoText, setEditTodoText] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    console.log("in handleDone:", id);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    ); //ide
    console.log("todo with id", todo.id, "...is it done?:", todo.isDone);
  };

  const handleDelete = (id: number) => {
    console.log("in handleDelete:", id);
    setTodos(todos.filter((todo) => todo.id !== id)); //ide
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodoText } : todo
      )
    );
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit]);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="todoSingle" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodoText}
          onChange={(e) => setEditTodoText(e.target.value)}
          className="todoSingleTextInput"
        />
      ) : todo.isDone ? (
        <h2 className="todoSingleTextDone">{todo.todo}</h2>
      ) : (
        <h2 className="todoSingleText">{todo.todo}</h2>
      )}
      <div className="iconBlock">
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiOutlineEdit />
        </span>

        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <CgTrash />
        </span>

        <span className="icon" onClick={() => handleDone(todo.id)}>
          {todo.isDone ? (
            <MdDoneOutline style={{ color: "gray" }} />
          ) : (
            <MdCheck style={{ transform: "scale(1.2)", fontWeight: "bold" }} />
          )}
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
