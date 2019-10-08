import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import GoalPage from './containers/GoalPage/GoalPage';
import DayPage from './containers/DayPage/DayPage';
import WeekPage from './containers/WeekPage/WeekPage';
import MonthPage from './containers/MonthPage/MonthPage';
import InboxPage from './containers/InboxPage/InboxPage';
import DelegatedPage from './containers/DelegatedPage/Delegated';

import Layout from './components/Layout/Layout';

class App extends Component {
  render () {
    return (
    <Layout>
      <Switch>
        <Route path="/inbox" component={InboxPage} />
        <Route path="/delegated" component={DelegatedPage} />
        <Route path="/month" component={MonthPage} />
        <Route path="/week" component={WeekPage} />
        <Route path="/day" component={DayPage} />
        <Route path="/" exact component={GoalPage} />
      </Switch>
    </Layout>
  );
}
}

export default App;