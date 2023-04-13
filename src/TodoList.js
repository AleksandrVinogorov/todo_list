import React, {useState} from "react";
import PropTypes from 'prop-types';
TodoList.propTypes = {
  todos: PropTypes.array
}

function TodoList ({todos, changeTodo, removeTask}) {
  const [check, setCheck] = useState('')

  return (
    <>
    {
      todos&&todos.map(t => <li key={t.id}>
        <div className='list-container__content'>
              <div className='list-container_item' key={t.id} >
                <div className="checkbox">
                  <input onClick={() => {changeTodo(t.id)}} type="checkbox" id={t.id} checked={t.completed} value={check} onChange={e => setCheck(e.target.value)} className='list-container__title-checkbox'/>
                  <label htmlFor={t.id}></label>
                </div>
                <div className='list-container__title-date'></div>
                <div className='list-container__title-task'>{t.title} </div>
                <button onClick={() => {removeTask(t.id)}} className="list-container__delete-btn"></button>
              </div>
        </div>
        </li>
        )
      }
      </>
    )
}

export default TodoList
