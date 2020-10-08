import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import './Counter.css';

function Counter(props) {
  const MAX_DURATION = 30;
  const [timeleft, setTimeleft] = useState(MAX_DURATION);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (timeleft > 0) {
      setTimeout(() => setTimeleft(timeleft - 1), 1000);
    } else {
      history.push('/');
    }
  }, [timeleft, history]);
  return (
    <>
      <div
        className="counter-container"
        style={{ textAlign: 'center', margin: '1rem 0' }}
      >
        <h1 style={{ margin: '0' }}>{timeleft}</h1>
        <progress className="counter" max={MAX_DURATION} value={timeleft} />
      </div>
    </>
  );
}

export default Counter;
