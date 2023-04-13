import React, { useState}  from 'react';

let ShowDoneTasks = ({todos}) => {

    const [isShown, setIsShown] = useState(true);

    const handleClick = event => {
      setIsShown(current => !current);
    };

    let count = todos&&todos.filter(arr => arr.completed === true).length;

    return <>
    <button className='show-done-tasks' onClick={handleClick}>Показать количество выполненных задач</button>
    <div className={isShown ? 'display-none' : 'display-block'}>Выполненных задач: {count}</div>
    </>
}
export default ShowDoneTasks