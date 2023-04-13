import React, { useState, useEffect } from "react"
import ShowDoneTasks from "./ShowDoneTasks"
import TodoList from "./TodoList"
import ShowPage from "./AddToDo"

const Home = () => {
  let DataBase = [
    {id: 0, title: 'Пример 1', completed: true,},
    {id: 1, title: 'Пример 2', completed: true,},
    {id: 2, title: 'Пример 3', completed: false,},
  ]
  // todos
  const [todos, setTodos] = useState(DataBase)
  // checkbox
  const [check, setCheck] = useState(DataBase)
  // localstorage
  const [items, setItems] = useState(() => {
    let items = null;
    if(items) {
      items = JSON.parse(localStorage.getItem('items'));
    }
  })
  const changeTodo = (id) => {
    const newDataBase = [...todos]
    const currentData = newDataBase.find(t => t.id === id);
    currentData.completed = !currentData.completed;
    setTodos(newDataBase)
    setItems(newDataBase)
  }
  let pointAll = (completed) => {
    let newDataBase = todos.filter(t => t.completed = true);
    setTodos(newDataBase)
    setItems(newDataBase)
    }

  function removeTask (id) {
    let filteredTasks = todos.filter(t => t.id !== id)
    setTodos(filteredTasks)
    setItems(filteredTasks)
  }
  function addTask (title) {
    let task = {id: todos.length, title, completed: false};
    let newTask = [task, ...todos];
    setTodos(newTask)
    setItems(newTask)
  }
  // localstorage 
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  return <>
    <ShowDoneTasks todos={todos}/>
    <div className='list-container__title'>
        <div className='checkbox'>
          {todos.map(t => <li key={t.id}> 
              <input onClick={() => {pointAll(t.completed)}} checked={t.completed} value={check} onChange={e => setCheck(e.target.value)} id='check' className='list-container__title-checkbox' type="checkbox"/>
             </li>)
          }
          <label htmlFor='check'></label>
        </div>
          <div className='list-container__title-date'>Выбрать все</div>
          <div className='list-container__title-task'>Задание</div>
      </div>
        <TodoList removeTask={removeTask} changeTodo={changeTodo} todos={todos}/>
        <ShowPage addTask={addTask}/>
  </>
}
export default Home