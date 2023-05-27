import Card from '../UI/Card';
import classes from './PracticeProjects.module.css';
import SingleProject from './singleProject/SingleProject';
const PracticeProjects = () => {
  return (
    <Card className={classes['wrapper']}>
      <Card className={classes['inner__wrapper']}>
        <SingleProject
          projectLink="https://weather-cdbieljvu-big-logic.vercel.app/"
          projectStatus="In progress. Not yet responsive"
          projectName="Weather App"
        />
      </Card>
    </Card>
  );
};

export default PracticeProjects;
