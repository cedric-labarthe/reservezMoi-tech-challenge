import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import convertDate from '../../tools/convertDate';

import UserImage from '../../components/UserImage';

const CommentsContainer = ({ comment }) => (
  <div className="details__comments">
    <div className="details__comments-header">
      <UserImage src={comment.user?.avatar_url} alt={comment.user?.login} />
      <p>
        <b>{comment.user?.login}</b>
      </p>
      <p>commented</p>
      <p>{convertDate(comment.created_at)}</p>
    </div>
    <div className="details__comments-body">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{comment.body}</ReactMarkdown>
    </div>
  </div>
);

CommentsContainer.propTypes = {
  comment: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CommentsContainer;
