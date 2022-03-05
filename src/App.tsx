import { useState, useEffect } from 'react';
import { isTemplateTail } from 'typescript';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);


  useEffect(() => { 
    console.log(`
    
    Thanks for peeping my silly to-to, app, one of my many exercises in React AND TypeScript.
    Hit me up. I'd love to hear from you!
    chrismochinski.com
    github.com/chrismochinski
    linkedin.com/in/chrismochinski


    
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$               $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$                   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$!                      $$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$  $$$$$$$$$$  $$$$$$$!                         $$$$$$$$  $$$$$$$$$$$  $$$$
$$$$.  $      $   $$$$$$$          0      0        !$$$$$$$  '$/  /  $' .$$$$$
$$$$$. !   i  i .$$$$$$$$                           $$$$$$$$. i  i  /! .$$$$$$
$$$$$$    -- --.$$$$$$$$$                           $$$$$$$$$.--'--'   $$$$$$$
$$$$$$L         $$$$$^^$$                           $$^^$$$$$'        J$$$$$$$
$$$$$$$.   .'   ""~   $$$                           $$$   ~""   .   .$$$$$$$$$
$$$$$$$$.  ;      .e$$$$$!    $$.             .$$  !$$$$$e,      ;  .$$$$$$$$$
$$$$$$$$$   .$$$$$$$$$$$$!     $$$.         .$$$   $$$$$$$$$$$$.'   $$$$$$$$$$
$$$$$$$$    .$$$$$$$$$$$$$!     $$ $$$$$$$$'$$    !$$$$$$$$$$$$$.    $$$$$$$$$
$$$$$$$     $$$$$$$$$$$$$$$$.     $    $$    $   .$$$$$$$$$$$$$$$$     $$$$$$$
                                 $    $$    $
                                 $.   $$   .$
                                  $        $'
                                   $$$$$$$$'
    `)
  }, []);



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
      <TodoList todos={todos} setTodos={setTodos} />
      
    </div>
  );
}

export default App;
