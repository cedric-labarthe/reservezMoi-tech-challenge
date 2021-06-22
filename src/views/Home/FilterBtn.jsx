import PropTypes from 'prop-types';
import { useContext } from 'react';

import { PageContext } from '../../contexts/PageContext';

const FilterBtn = ({ btnName, handleClick }) => {
  const {
    page, perPage, sortType, direction, stateResults, setStateResults,
  } = useContext(PageContext);
  return (
    <button
      className={`home__main-block-btn${
        btnName === stateResults ? '--active' : ''
      }`}
      type="button"
      onClick={() => {
        handleClick(page, perPage, sortType, direction, btnName);
        setStateResults(btnName);
      }}
      disabled={btnName === stateResults}
    >
      {btnName}
    </button>
  );
};

FilterBtn.propTypes = {
  btnName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FilterBtn;
