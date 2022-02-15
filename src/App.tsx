import { useState } from 'react';
import { isTemplateTail } from 'typescript';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('in handleAdd', todo);
    todo ? setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]) : alert('Please Enter a Todo!');
    // setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]); //idea spread op, nailed by copilot
    setTodo('');
    console.log('List is now: todos', todos);
  }


  return (
    <div className="App">
      <h1 className="header">Ts + rEaCt ToDo!</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList />
      <ul>

      {todos.map((item) => (
          <li>{item.todo}</li>
          ))}
          </ul>
    </div>
  );
}

export default App;
