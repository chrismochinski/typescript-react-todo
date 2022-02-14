import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
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
  }

  console.log('Lis tis now:', todos);

  return (
    <div className="App">
      <h1 className="header">Ts + rEaCt ToDo!</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
