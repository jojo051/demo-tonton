import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QuestionPhrase from './component/QuestionPhrase';
import Home from './component/Home';
import QCM from './component/QCM';
<<<<<<< HEAD
import questionSelect from './component/QuestionSelect';
=======
>>>>>>> feat/brianTest

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/*<Route path="/5" component={} />
<<<<<<< HEAD
          <Route path="/4" component={} />*/}
          <Route path="/3" component={QuestionPhrase} />
          <Route path="/2" component={questionSelect} />
=======
          <Route path="/4" component={} />
          <Route path="/3" component={} />
          <Route path="/2" component={} />*/}
          <Route path="/questionphrase" component={QuestionPhrase} />
>>>>>>> feat/brianTest
          <Route path="/1" component={QCM} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
