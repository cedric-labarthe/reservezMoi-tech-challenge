import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageProvider from './contexts/PageContext';
import IssuesProvider from './contexts/IssuesContext';
import IssueProvider from './contexts/IssueContext';

import Home from './views/Home/Home';

import './App.css';

import DetailsPage from './views/DetailsPage/DetailsPage';
import NavBar from './components/NavBar';

const App = () => (
  <Router>
    <NavBar />
    <PageProvider>
      <Switch>
        <Route path="/:id">
          <IssueProvider>
            <DetailsPage />
          </IssueProvider>
        </Route>
        <Route path="/">
          <IssuesProvider>
            <Home />
          </IssuesProvider>
        </Route>
      </Switch>
    </PageProvider>
  </Router>
);

export default App;
