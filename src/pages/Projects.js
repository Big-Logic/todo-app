import React from 'react';
import Card from '../components/UI/Card';
import PracticeProjects from '../components/practiceProjects/PracticeProjects';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <Card>
      <Link to="/" className="back__btn">
        <i class="las la-arrow-left"></i>
      </Link>
      <PracticeProjects />
    </Card>
  );
};

export default Projects;
