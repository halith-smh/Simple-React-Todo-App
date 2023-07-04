
import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';


function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodolist] = useState([]);
  return (
    <>
       <Header />
       <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodolist={setTodolist} />
       <TodoList setTodolist={setTodolist} todoList={todoList} />
    </>
  );
}

export default App;