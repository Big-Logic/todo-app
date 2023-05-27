import Card from '../UI/Card';
import classes from './PracticeProjects.module.css';
import SingleProject from './singleProject/SingleProject';
const PracticeProjects = () => {
  return (
    <Card className={classes['wrapper']}>
      <Card className={classes['inner__wrapper']}>
        <SingleProject
          projectLink="https://weather-cdbieljvu-big-logic.vercel.app/"
          projectStatus="In Progress"
          projectName="Weather App"
        />
        <SingleProject
          projectLink="https://weather-cdbieljvu-big-logic.vercel.app/"
          projectStatus="In Progress"
          projectName="Fruit Online Store"
        />
      </Card>
    </Card>
  );
};

export default PracticeProjects;
