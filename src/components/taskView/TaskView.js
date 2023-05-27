import React, { useState } from 'react';
import Card from '../UI/Card';
import Task from '../Task/Task';

import classes from './TaskView.module.css';

const TaskView = ({
  tasks,
  handleDelete,
  handleEdit,
  viewFilter,
  setAddToLocal,
  addToLocal,
}) => {
  const [reRender, setReRender] = useState(false);
  const filterArray = !tasks
    ? []
    : tasks.filter((task) => task.status === viewFilter);
  return (
    <Card className={classes['task__view--wrapper']}>
      {!tasks || tasks.length < 1 ? (
        <p>No Task To show</p>
      ) : viewFilter === 'all' ? (
        tasks.map((tsk) => (
          <Task
            task={tsk}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            reRender={reRender}
            setReRender={setReRender}
            setAddToLocal={setAddToLocal}
            addToLocal={addToLocal}
          />
        ))
      ) : filterArray.length < 1 ? (
        <p>No Task To show</p>
      ) : (
        filterArray.map((task) => (
          <Task
            task={task}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            reRender={reRender}
            setReRender={setReRender}
            setAddToLocal={setAddToLocal}
            addToLocal={addToLocal}
          />
        ))
      )}
    </Card>
  );
};

export default TaskView;
