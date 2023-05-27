import React from 'react';
import App from '../components/app/App';
import { Link } from 'react-router-dom';

const Application = () => {
  return (
    <>
      <App />
      <Link to="/projects" className="more__projects--btn">
        More Projects
      </Link>
    </>
  );
};

export default Application;
