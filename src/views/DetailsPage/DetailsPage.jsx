import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './DetailsPage.css';

import { IssueContext } from '../../contexts/IssueContext';

import OpenClosedIcon from '../../components/OpenClosedIcon';

import { getAnIssue, getIssueComments } from '../../tools/apiReq';
import calculateTime from '../../tools/convertDate';
import capitalize from '../../tools/capitalize';

import CommentsContainer from './CommentContainer';
import ScrollTop from '../../components/ScroolTop';
import Label from '../../components/Labels';

const DetailsPage = () => {
  const { id } = useParams();
  const { issue, setIssue } = useContext(IssueContext);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getAnIssue(id).then((res) => setIssue(res.data));
    getIssueComments(id).then((res) => setComments(res.data));
  }, []);

  return (
    <div className="details__main">
      <h2>{issue.title}</h2>
      <p>#{issue.number}</p>
      <div className="details__main-line">
        <OpenClosedIcon state={issue.state} />
        <span>{issue.state ? capitalize(issue.state) : null}</span>
      </div>
      <div className="details__main-line">
        <p>{issue.user?.login}</p>
        <p>opened this issue</p>
        <p>{calculateTime(issue.created_at)}</p>
        <p>
          {issue.comments} comment{issue.comments === 1 ? '' : 's'}
        </p>
      </div>
      {issue.labels
        ? issue.labels.map((label) => (
            <Label key={label.id} color={label.color} name={label.name} />
        ))
        : null}
      <CommentsContainer comment={issue} />
      {comments.length
        ? comments.map((comment) => <CommentsContainer comment={comment} />)
        : null}
      <ScrollTop />
    </div>
  );
};

export default DetailsPage;
