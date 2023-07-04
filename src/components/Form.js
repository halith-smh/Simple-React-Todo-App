import React from 'react';
import styles from '../style.module.css';
import shortid from 'shortid';

export default function Form({todo, setTodo, todoList, setTodolist}) {

    const handleInput = (event) =>{
        setTodo(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        setTodolist([...todoList, {id: shortid.generate(), name: todo}]);
        console.log(todoList);
        setTodo("");
    }
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.formInput} onChange={handleInput} type="text" name='todo' placeholder='Enter the tasks' value={todo} />
        <br/><button className={styles.formBtn} type='submit'>Add</button>
      </form>
    </div>
  )
};