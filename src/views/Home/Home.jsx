import { useContext, useEffect } from 'react';

import './Home.css';

import { PageContext } from '../../contexts/PageContext';
import { IssuesContext } from '../../contexts/IssuesContext';

import getIssues from '../../tools/apiReq';
import IssueLine from './IssueLine';
import MainBlock from './MainBlock';
import PageNavigation from './PageNavigation';
import ScrollTop from '../../components/ScroolTop';

// TODO handle error response

const Home = () => {
  const {
    page, setPage, perPage, sortType, direction, stateResults,
  } = useContext(PageContext);

  const { issues, setIssues } = useContext(IssuesContext);

  useEffect(() => {
    getIssues(page, perPage, sortType, direction, stateResults).then((res) => setIssues(res.data));
  }, [page, perPage]);

  useEffect(() => {
    if (page !== 1 && !issues.length) setPage(1);
  }, [issues]);

  return (
    <div className="Home">
      <MainBlock>
        {issues.length
          ? issues.map((issue) => <IssueLine key={issue.id} issue={issue} />)
          : 'Loading'}
      </MainBlock>
      <PageNavigation />
      <ScrollTop />
    </div>
  );
};

export default Home;
