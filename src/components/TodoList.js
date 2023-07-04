import React from 'react';
import Todo from './Todo';

const TodoList = ({todoList, setTodolist}) => {
  return (
    <div>
      {todoList.map((item) => (
        <Todo setTodolist={setTodolist} todoList={todoList} key={item.id} item={item} />
      ))}
    </div>
  )
}

export default TodoList;