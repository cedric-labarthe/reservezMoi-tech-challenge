import PropTypes from 'prop-types';

import './UserImage.css';

const UserImage = ({ src, alt, title }) => (
  <img
    className="user-image"
    src={src}
    alt={alt}
    title={title ? `Assigned to ${title}` : null}
  />
);

UserImage.defaultProps = {
  title: '',
};

UserImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default UserImage;
