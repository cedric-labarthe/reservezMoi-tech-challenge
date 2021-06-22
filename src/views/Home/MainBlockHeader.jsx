import { useContext } from 'react';

import { IssuesContext } from '../../contexts/IssuesContext';
import { PageContext } from '../../contexts/PageContext';

import getIssues from '../../tools/apiReq';
import SortBtn from './SortBtn';
import FilterBtn from './FilterBtn';
import OptionList from '../../components/OptionList';

// TODO make context to get stateType, sortType and direction

const MainBlockHeader = () => {
  const { setIssues } = useContext(IssuesContext);
  const { perPage, setPerPage } = useContext(PageContext);

  const handleApiCall = (page, perPageResult, sortType, direction, state) => {
    getIssues(page, perPageResult, sortType, direction, state).then((res) => {
      setIssues(res.data);
    });
  };
  return (
    <div className="home__main-block-header">
      <div>
        <FilterBtn btnName="open" handleClick={handleApiCall} />
        <FilterBtn btnName="closed" handleClick={handleApiCall} />
        <FilterBtn btnName="all" handleClick={handleApiCall} />
      </div>
      <div className="home__main-block-header">
        <OptionList
          name="perPages"
          actual={perPage}
          description="Results per pages: "
          handleSelect={setPerPage}
        />
        <div className="home__main-block-header-sort">
          <span>Sort by: </span>
          <SortBtn btnName="created" handleClick={handleApiCall} />
          <SortBtn btnName="updated" handleClick={handleApiCall} />
          <SortBtn btnName="comments" handleClick={handleApiCall} />
        </div>
      </div>
    </div>
  );
};

export default MainBlockHeader;
