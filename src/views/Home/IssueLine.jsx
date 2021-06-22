import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './IssueLine.css';

import IconSection from './IconsSection';
import Label from '../../components/Labels';
import DetailsText from './DetailsText';
import OpenClosedIcon from '../../components/OpenClosedIcon';

const IssueLine = ({ issue }) => (
  <Link to={`/${issue.number}`}>
    <div className="issue-line">
      <div className="issue-line__main">
        <div className="issue-line__status">
          <OpenClosedIcon state={issue.state} />
        </div>
        <div className="issue-line__text">
          <div className="issue-line__text-head">
            <span className="issue-line__text-title">{issue.title}</span>
            <div className="issue-line__labels-container">
              {issue?.labels.length
                ? issue.labels.map((label) => (
                    <Label
                      key={label.id}
                      color={label.color}
                      name={label.name}
                    />
                ))
                : null}
            </div>
          </div>
          <DetailsText
            number={issue.number}
            createdAt={issue.created_at}
            user={issue.user}
          />
        </div>
      </div>
      <IconSection comments={issue.comments} assignee={issue.assignee} />
    </div>
  </Link>
);

IssueLine.propTypes = {
  issue: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default IssueLine;
