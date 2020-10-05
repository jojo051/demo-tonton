import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './component/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/*<Route path="/5" component={} />
          <Route path="/4" component={} />
          <Route path="/3" component={} />
          <Route path="/2" component={} />
          <Route path="/1" component={} />*/}
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
