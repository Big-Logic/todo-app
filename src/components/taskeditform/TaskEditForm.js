import React, { useState } from 'react';
import Card from '../UI/Card';

import classes from './TaskEditForm.module.css';

const TaskEditForm = ({
  task,
  onDisplayTaskForm,
  setAddToLocal,
  addToLocal,
}) => {
  const [titleInput, setTitleInput] = useState(task.title);
  const [statusInput, setStatusInput] = useState(task.status);
  const handleFormClose = () => {
    onDisplayTaskForm(false);
  };

  const handleTitleChange = ({ target }) => {
    setTitleInput(target.value);
  };
  const handleStatusChange = ({ target }) => {
    setStatusInput(target.value);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    task.title = titleInput;
    task.status = statusInput;
    handleFormClose();
    setAddToLocal(!addToLocal);
  };
  return (
    <Card className={classes['form__popup']}>
      <Card className={classes['form__wrapper']}>
        <button
          className={classes['form__close--btn']}
          onClick={handleFormClose}
        >
          <i class="las la-times"></i>
        </button>
        <form className={classes['task__form']} onSubmit={handleFormSubmit}>
          <h2 className={classes['form__header']}>Edit Todo</h2>
          <div>
            <label htmlFor="todotitle">Title</label>
            <input
              type="text"
              id="todotitle"
              value={titleInput}
              onChange={handleTitleChange}
            />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select value={statusInput} onChange={handleStatusChange}>
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
          </div>
          <div>
            <button type="submit" className={classes['form__btn']}>
              Update
            </button>
            <button className={classes['form__btn']} onClick={handleFormClose}>
              Cancel
            </button>
          </div>
        </form>
      </Card>
    </Card>
  );
};

export default TaskEditForm;
