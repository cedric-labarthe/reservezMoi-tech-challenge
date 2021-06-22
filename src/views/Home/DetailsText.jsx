import PropTypes from 'prop-types';

import calculateTime from '../../tools/convertDate';

const DetailsText = ({ number, createdAt, user }) => (
  <div className="issue-line__text-details">
    <span>{`#${number} `}</span>
    <span>{`opened ${calculateTime(createdAt)} `}</span>
    <span>{`by ${user.login}`}</span>
  </div>
);

DetailsText.propTypes = {
  number: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DetailsText;
