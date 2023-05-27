import React from 'react';
import Card from '../UI/Card';

import classes from './AppFilter.module.css';

const AppFilter = ({ setViewFilter }) => {
  const handleFilterChange = ({ target }) => {
    setViewFilter(target.value);
  };
  return (
    <Card className={classes['filter__form']}>
      <form>
        <select
          className={classes['filter__dropdown']}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
        </select>
      </form>
    </Card>
  );
};

export default AppFilter;
