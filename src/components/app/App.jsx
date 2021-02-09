import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllCharacters from '../../containers/AllCharacters';
import Detail from '../../containers/Detail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllCharacters} />
        <Route exact path="/details/:id" component={Detail} />
      </Switch>
    </Router>
  );
}
