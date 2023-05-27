import React from 'react';

import Card from '../UI/Card';

import classes from './NewTaskButton.module.css';

const NewTaskButton = ({ setDisplayTaskForm }) => {
  const handleButtonClick = () => {
    setDisplayTaskForm('new-form');
  };
  return (
    <Card className={classes['newtask__btn--wrapper']}>
      <button className={classes['new__task--btn']} onClick={handleButtonClick}>
        Add Task
      </button>
    </Card>
  );
};

export default NewTaskButton;
