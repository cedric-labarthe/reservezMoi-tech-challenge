import PropTypes from 'prop-types';
import { useContext } from 'react';
import { PageContext } from '../../contexts/PageContext';

const SortBtn = ({ btnName, handleClick }) => {
  const {
    page,
    perPage,
    sortType,
    setSortType,
    direction,
    setDirection,
    stateResults,
  } = useContext(PageContext);

  return (
    <button
      className={`home__main-block-btn${
        btnName === sortType ? '--active' : ''
      }`}
      type="button"
      onClick={() => {
        setDirection(direction === 'desc' ? 'asc' : 'desc');
        setSortType(btnName);
        handleClick(page, perPage, btnName, direction, stateResults);
      }}
    >
      {btnName}
    </button>
  );
};

SortBtn.propTypes = {
  btnName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SortBtn;
