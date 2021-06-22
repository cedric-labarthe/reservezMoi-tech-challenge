import { useContext } from 'react';
import { PageContext } from '../../contexts/PageContext';

const PageNavigation = () => {
  const { page, setPage } = useContext(PageContext);
  return (
    <div className="home__pagination">
      <button
        type="button"
        onClick={() => setPage((actual) => actual - 1)}
        disabled={page === 1}
      >
        prev
      </button>
      <span>Page : {page}</span>
      <button type="button" onClick={() => setPage((actual) => actual + 1)}>
        next
      </button>
    </div>
  );
};

export default PageNavigation;
