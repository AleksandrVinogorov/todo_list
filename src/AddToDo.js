import React, { useState}  from 'react';

export default function ShowPage({addTask}) {
    const [title, setTitle] = useState('')

    // Показать форму для добавления заданий
    const [isShown, setIsShown] = useState(true);
    const handleClick = event => {
      setIsShown(current => !current);
    };

    return (
        <>
        <section className='add-task'>
          <button className='add-task__btn' onClick={handleClick}></button>
        </section>
        <section className={isShown ? 'display-none' : 'display-block'}>
            <div className='new-task'>
                <div className='new-task__container'>
                    <div className='new-task__title'>Добавить задание</div>
                    <input onKeyPress={(e) => {e.key === 'Enter' && addTask(title)}} onChange={e => setTitle(e.target.value)} value={title} className='input' placeholder='Введите задание'></input>
                </div>
                <div className='new-task__add-delete-buttons'>
                    <button onClick={() => {addTask(title); setTitle('')} } className='new-task__add-button'>Добавить</button>
                    <button onClick={handleClick} className='new-task__delete-button'>Отмена</button>
                </div>
            </div>
        </section>
        </>
    );
  }

