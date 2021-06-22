import PropTypes from 'prop-types';
import MainBlockHeader from './MainBlockHeader';

const MainBlock = ({ children }) => (
  <div className="home__main-block">
    <MainBlockHeader />
    {children}
  </div>
);

MainBlock.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MainBlock;
