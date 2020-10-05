import React, { useState } from 'react';
import './QuestionQCM.css';

import questions from '../data/questions';

function QuestionQCM() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [result, setResult] = useState(false);

  const handleChangeCheckbox1 = () => {
    setCheckbox1(!checkbox1);
  };

  const handleChangeCheckbox2 = () => {
    setCheckbox2(!checkbox2);
  };

  const handleChangeCheckbox3 = () => {
    setCheckbox3(!checkbox3);
  };

  const handleChangeCheckbox4 = () => {
    setCheckbox4(!checkbox4);
  };

  const checkResult = () => {
    if (checkbox1 === true && checkbox2 === true && checkbox4 === true) {
      setResult(true);
      console.log('good :)');
    } else {
      console.log('not good :(');
    }
  };

  return (
    <>
      <h1>Hello from QuestionQCM</h1>
      <div className="question-phrase-container">
        <div className="question-title">{questions[0].title}</div>
        <div className="question-answers">
          <div className="first-answer" key={questions[0].answers[0].id}>
            <input
              type="checkbox"
              id={questions[0].answers[0].title}
              name={questions[0].answers[0].title}
              onChange={handleChangeCheckbox1}
            />
            <label htmlFor={questions[0].answers[0].title}>
              {questions[0].answers[0].title}
            </label>
          </div>
          <div className="second-answer" key={questions[0].answers[1].id}>
            <input
              type="checkbox"
              id={questions[0].answers[1].title}
              name={questions[0].answers[1].title}
              onChange={handleChangeCheckbox2}
            />
            <label htmlFor={questions[0].answers[1].title}>
              {questions[0].answers[1].title}
            </label>
          </div>
          <div className="third-answer" key={questions[0].answers[2].id}>
            <input
              type="checkbox"
              id={questions[0].answers[2].title}
              name={questions[0].answers[2].title}
              onChange={handleChangeCheckbox3}
            />
            <label htmlFor={questions[0].answers[2].title}>
              {questions[0].answers[2].title}
            </label>
          </div>
          <div className="fourth-answer" key={questions[0].answers[3].id}>
            <input
              type="checkbox"
              id={questions[0].answers[3].title}
              name={questions[0].answers[3].title}
              onChange={handleChangeCheckbox4}
            />
            <label htmlFor={questions[0].answers[3].title}>
              {questions[0].answers[3].title}
            </label>
          </div>
          <button onClick={checkResult}>Check Result</button>
        </div>
      </div>
    </>
  );
}

export default QuestionQCM;
