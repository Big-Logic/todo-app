import Card from '../../UI/Card';
import classes from './SingleProject.module.css';

const SingleProject = ({ projectName, projectLink, projectStatus }) => {
  return (
    <Card className={classes['single__project--wrapper']}>
      <div>
        <h3 className={classes['project__title']}>{projectName}</h3>
        <p className={classes['project__status']}>{projectStatus}</p>
      </div>
      <div>
        <a
          href={projectLink}
          target="_blank"
          className={classes['project__action--btn']}
        >
          <i class="las la-external-link-alt"></i>
        </a>
      </div>
    </Card>
  );
};

export default SingleProject;
