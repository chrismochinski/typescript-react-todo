import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; //hovered over type to figure this out
  handleAdd: (event: React.FormEvent) => void; //hovered over type to figure this out too, even though it's weeeeeeeeird
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {



  return (
    <>
      <form className="input" onSubmit={handleAdd}>
        <input
          className="inputField"
          type="text"
          placeholder="Add a new todo"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <br className="onlyOnMobile" />
        <button className="submitButton" type="submit">
          Go
        </button>
      </form>
    </>
  );
};

export default InputField;
