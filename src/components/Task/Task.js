import React from 'react';
import Card from '../UI/Card';

import classes from './Task.module.css';

const Task = ({
  task,
  handleDelete,
  handleEdit,
  reRender,
  setReRender,
  setAddToLocal,
  addToLocal,
}) => {
  const handleDeleteBtnClick = () => {
    handleDelete(task.id);
  };

  const handleEditBtnClick = () => {
    handleEdit(task.id);
  };

  const handleCheckClick = () => {
    if (task.status === 'complete') {
      task.status = 'incomplete';
    } else if (task.status === 'incomplete') {
      task.status = 'complete';
    }
    setAddToLocal(!addToLocal);
    setReRender(!reRender);
  };

  return (
    <Card className={classes['task__wrapper']}>
      <div>
        <button
          className={`${classes['task__actions--btn']} ${
            task.status === 'complete' && classes['btn__bgblue']
          }`}
          onClick={handleCheckClick}
        >
          {task.status === 'complete' ? <i class="las la-check"></i> : ''}
        </button>
      </div>
      <div>
        <p className={classes['task__title']}>{task.title}</p>
        <p className={classes['task__date']}>{task.date}</p>
      </div>
      <div>
        <button
          onClick={handleDeleteBtnClick}
          className={classes['task__actions--btn']}
          title="delete"
        >
          <i class="las la-trash-alt"></i>
        </button>
      </div>
      <div>
        <button
          onClick={handleEditBtnClick}
          className={classes['task__actions--btn']}
          title="edit"
        >
          <i class="las la-edit"></i>
        </button>
      </div>
    </Card>
  );
};

export default Task;
