import axios from 'axios';

const issuesUrl = 'https://api.github.com/repos/facebook/create-react-app/issues';

const getIssues = async (page, perPage, sortType, direction, state) => {
  try {
    let completeUrl = issuesUrl;
    if (page) completeUrl += `?page=${page}`;
    if (perPage) completeUrl += `&per_page=${perPage}`;
    if (sortType) completeUrl += `&sort=${sortType}`;
    if (direction) completeUrl += `&direction=${direction}`;
    if (state) completeUrl += `&state=${state}`;
    const res = await axios.get(completeUrl);
    return res;
  } catch (err) {
    return err;
  }
};

export const getAnIssue = async (id) => {
  try {
    let completeUrl = issuesUrl;
    if (id) completeUrl += `/${id}`;
    const res = axios.get(completeUrl);
    return res;
  } catch (err) {
    return err;
  }
};

export const getIssueComments = async (id) => {
  try {
    let completeUrl = issuesUrl;
    if (id) completeUrl += `/${id}/comments`;
    const res = axios.get(completeUrl);
    return res;
  } catch (err) {
    return err;
  }
};

export default getIssues;
