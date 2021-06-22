import PropTypes from 'prop-types';

import { ReactComponent as MessageSvg } from '../../assets/messager.svg';
import UserImage from '../../components/UserImage';

const IconSection = ({ comments, assignee }) => (
  <div className="issue-line__icons">
    <div className="icon__center">
      {assignee ? (
        <UserImage
          src={assignee.avatar_url}
          alt={assignee.login}
          title={assignee.login}
        />
      ) : null}
    </div>
    <div className="icon__right">
      {comments ? (
        <div>
          <MessageSvg />
          <span className="icon__right-number">{comments}</span>
        </div>
      ) : null}
    </div>
  </div>
);

IconSection.defaultProps = {
  assignee: {},
};

IconSection.propTypes = {
  comments: PropTypes.number.isRequired,
  assignee: PropTypes.objectOf(PropTypes.any),
};
export default IconSection;
