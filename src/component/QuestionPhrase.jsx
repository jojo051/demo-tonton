import React, { useState } from 'react';
import './QuestionPhrase.css';

function QuestionPhrase() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [bool, setBool] = useState(false);
  const [words, setWords] = useState(['constituants', 'transformation']);

  const handleChangeValue1 = (e) => {
    setValue1(e.target.value);
  };

  const handleChangeValue2 = (e) => {
    setValue2(e.target.value);
  };

  const checkResult = () => {
    if (words[0] === value1 && words[1] === value2) {
      setBool(true);
    } else {
      console.log('wrong answer');
    }
  };

  return (
    <>
      <h1>Hello from QuestionPhrase</h1>
      <div className="question-phrase-container">
        Elle a pour but la connaissance des raisins et des vins à partir de
        l'analyse de leurs
        <input
          className="input-phrase"
          type="text"
          name="value1"
          value={value1}
          onChange={handleChangeValue1}
          required
        />
        et des phénomènes chimiques et biologiques dont ils sont le siège. Elle
        étudie la{' '}
        <input
          className="input-phrase"
          type="text"
          name="value2"
          value={value2}
          onChange={handleChangeValue2}
          required
        />
        du raisin en vin, ainsi que la conservation du vin.
        <div className="check-result">
          <button onClick={checkResult}>Check Result</button>
        </div>
      </div>
    </>
  );
}

export default QuestionPhrase;
