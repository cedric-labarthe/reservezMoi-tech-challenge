import PropTypes from 'prop-types';

import './Labels.css';

import convertColor from '../tools/convertColor';

const Label = ({ color, name }) => {
  // Inline style here make it simplier to handle color changes
  const styles = {
    backgroundColor: `${convertColor(color, -80, 0.8)}`,
    border: `2px solid ${convertColor(color, +50)}`,
    color: `${convertColor(color, +60)}`,
  };

  return (
    <div className="labels" style={styles}>
      {name}
    </div>
  );
};

Label.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Label;
