import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QuestionPhrase from './component/QuestionPhrase';
import QuestionSelect from './component/QuestionSelect';
import Home from './component/Home';
import QCM from './component/QCM';
import QuestionPoivron from './component/QuestionPoivron';

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/*<Route path="/5" component={} />*/}
          <Route path="/4" component={QuestionPoivron} />
          <Route path="/3" component={QuestionPhrase} />
          <Route path="/2" component={QuestionSelect} />
          <Route path="/1" component={QCM} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
