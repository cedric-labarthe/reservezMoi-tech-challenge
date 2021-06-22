import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const IssuesContext = createContext();

const IssuesProvider = ({ children }) => {
  const [issues, setIssues] = useState({});
  return (
    <IssuesContext.Provider value={{ issues, setIssues }}>
      {children}
    </IssuesContext.Provider>
  );
};

IssuesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default IssuesProvider;
