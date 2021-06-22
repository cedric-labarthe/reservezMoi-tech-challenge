import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const PageContext = createContext();

const PageProvider = ({ children }) => {
  // Page target
  const [page, setPage] = useState(1);
  // Results per pages max: 100
  const [perPage, setPerPage] = useState(20);
  // Sort by created, updated or comments
  const [sortType, setSortType] = useState('created');
  // Direction of sorting asc, desc
  const [direction, setDirection] = useState('desc');
  // State of the issues open, closed, or all
  const [stateResults, setStateResults] = useState('open');

  return (
    <PageContext.Provider
      value={{
        page,
        setPage,
        perPage,
        setPerPage,
        sortType,
        setSortType,
        direction,
        setDirection,
        stateResults,
        setStateResults,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

PageProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageProvider;
