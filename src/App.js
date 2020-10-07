import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QuestionPhrase from './component/QuestionPhrase'
import Home from './component/Home';
import Example from './component/Example';

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/*<Route path="/5" component={} />
          <Route path="/4" component={} />
          <Route path="/3" component={} />
          <Route path="/2" component={} />
          <Route path="/questionphrase" component={QuestionPhrase} />*/}
          <Route path="/1" component={Example} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
