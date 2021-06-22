import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const IssueContext = createContext();

const IssueProvider = ({ children }) => {
  const [issue, setIssue] = useState({});
  return (
    <IssueContext.Provider value={{ issue, setIssue }}>
      {children}
    </IssueContext.Provider>
  );
};

IssueProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default IssueProvider;
