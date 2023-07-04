import React from 'react'
import styles from '../style.module.css';

const Todo = ({item, todoList, setTodolist}) => {
    const handleDelete = () =>{
        setTodolist(todoList.filter((list) => list.id !== item.id));
    }
  return (
    <div className={styles.todoItem}>
      <h3 className={styles.todoh3}>{item.name}</h3>
      <button onClick={handleDelete} className={styles.todoBtn}>Done</button>
    </div>
  );
}

export default Todo;