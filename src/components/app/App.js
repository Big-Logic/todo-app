import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { generateDate } from '../../helpers/helpers';
import NewTaskButton from '../newTastButton/NewTaskButton';
import AppFilter from '../appFilter/AppFilter';
import TaskView from '../taskView/TaskView';
import Card from '../UI/Card';
import NewTaskForm from '../newtaskform/NewTaskForm';
import TaskEditForm from '../taskeditform/TaskEditForm';

import classes from './App.module.css';

const App = () => {
  const [tasks, setTasks] = useState();
  const [displayTaskForm, setDisplayTaskForm] = useState(false);
  const [viewFilter, setViewFilter] = useState('all');
  const [addToLocal, setAddToLocal] = useState(false);

  const addTask = (title, status) => {
    setTasks((prev) => {
      return [
        {
          id: `task${tasks.length + 1}`,
          title: title,
          date: generateDate(),
          status: status,
        },
        ...prev,
      ];
    });
    setAddToLocal(true);
  };
  useEffect(() => {
    if (typeof tasks === 'object') {
      if (!addToLocal || addToLocal) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    }
  }, [tasks, addToLocal]);

  useEffect(() => {
    const saveTasks = JSON.parse(localStorage.getItem('tasks'));
    if (saveTasks) {
      setTasks(saveTasks);
    } else {
      setTasks([]);
    }
  }, []);
  const handleDelete = (id) => {
    const returnArray = tasks.filter((task) => task.id !== id);
    setTasks(returnArray);
  };

  const handleEdit = (id) => {
    const [returnArray] = tasks.filter((task) => task.id === id);
    setDisplayTaskForm(returnArray);
  };
  return (
    <>
      {displayTaskForm === 'new-form'
        ? ReactDOM.createPortal(
            <NewTaskForm
              onDisplayTaskForm={setDisplayTaskForm}
              onSetTasks={addTask}
            />,
            document.getElementById('popup')
          )
        : typeof displayTaskForm === 'object'
        ? ReactDOM.createPortal(
            <TaskEditForm
              task={displayTaskForm}
              onDisplayTaskForm={setDisplayTaskForm}
              addToLocal={addToLocal}
              setAddToLocal={setAddToLocal}
            />,
            document.getElementById('popup')
          )
        : ''}
      <Card className={classes['app__wrapper']}>
        <div>
          <h1 className={classes['app__header']}>ToDo List</h1>
        </div>
        <div className={classes['app__inner--wrapper']}>
          <NewTaskButton setDisplayTaskForm={setDisplayTaskForm} />
          <AppFilter setViewFilter={setViewFilter} />
        </div>
        <TaskView
          tasks={tasks}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          viewFilter={viewFilter}
          setAddToLocal={setAddToLocal}
          addToLocal={addToLocal}
        />
      </Card>
    </>
  );
};

export default App;
