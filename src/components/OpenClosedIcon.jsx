import PropTypes from 'prop-types';

import { ReactComponent as OpenClosed } from '../assets/circles.svg';

const OpenClosedIcon = ({ state }) => {
  const style = {
    open: {
      width: '20px',
      fill: 'green',
    },
    closed: {
      width: '20px',
      fill: 'red',
    },
  };
  return <OpenClosed style={state === 'open' ? style.open : style.closed} />;
};

OpenClosedIcon.propTypes = {
  state: PropTypes.string.isRequired,
};

export default OpenClosedIcon;
