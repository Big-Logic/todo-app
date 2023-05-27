import React, { useRef } from 'react';
import Card from '../UI/Card';

import classes from './NewTaskForm.module.css';

const NewTaskForm = ({ onDisplayTaskForm, onSetTasks }) => {
  const inputTitle = useRef();
  const inputStatus = useRef();

  const handleFormClose = () => {
    onDisplayTaskForm(false);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const title = inputTitle.current.value;
    const status = inputStatus.current.value;
    onSetTasks(title, status);
    handleFormClose();
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
          <h2 className={classes['form__header']}>Add Todo</h2>
          <div>
            <label htmlFor="todotitle">Title</label>
            <input type="text" id="todotitle" ref={inputTitle} required />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select ref={inputStatus}>
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
          </div>
          <div>
            <button type="submit" className={classes['form__btn']}>
              Add Task
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

export default NewTaskForm;
