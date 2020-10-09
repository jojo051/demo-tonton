import React, { useState,useEffect } from 'react';
import './QuestionPoivron.css';
import questions from '../data/questions';
import img from '../img/noun_grapes_3070556.png';
import { useHistory } from 'react-router-dom';
import BorderTopHome from './BorderTopHome';

function QuestionPoivron() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [result, setResult] = useState(false);
  const history = useHistory();
  const MAX_DURATION = 30;
  const [timeleft, setTimeleft] = useState(MAX_DURATION);
  const [pause, setPause ] = useState( false )
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
    if ( checkbox4 === true) {
      setResult(true);
      history.push('/');
      console.log('good :)');
    } else {
      console.log('not good :(');
    }
  };

  
    const timer =()=> {
    if (timeleft > 0 && pause === false) {
      setTimeout(() => setTimeleft(timeleft - 1), 1000);
    }
  }
  timer()

  return (
    <div className={pause === true ? "screen-pause":"" }>
      <BorderTopHome />
      <div
        className="counter-container"
      >
        <h1 style={{ margin: '0' }}>{timeleft}</h1>
        <progress className="counter" max={MAX_DURATION} value={timeleft} />
      </div>
      <div className="img-container">
        <img className="img-question" src={img} alt="image" />
      </div>
      <div className="question-title-container">
        <div>{questions[8].title}</div>
      </div>

      <div className="global-answers-container">
        <div className="first-answer" key={questions[8].answers[0].id}>
          <div
            className={
              checkbox1 ? 'answers-container-selected' : 'answers-container'
            }
          >
            <input
              className="answer-input"
              type="checkbox"
              id={questions[8].answers[0].title}
              name={questions[8].answers[0].title}
              onChange={handleChangeCheckbox1}
            />
            <label htmlFor={questions[8].answers[0].title}>
              {questions[8].answers[0].title}
            </label>
          </div>
        </div>
        <div className="second-answer" key={questions[8].answers[1].id}>
          <div
            className={
              checkbox2 ? 'answers-container-selected' : 'answers-container'
            }
          >
            <input
              className="answer-input"
              type="checkbox"
              id={questions[8].answers[1].title}
              name={questions[8].answers[1].title}
              onChange={handleChangeCheckbox2}
            />
            <label htmlFor={questions[8].answers[1].title}>
              {questions[8].answers[1].title}
            </label>
          </div>
        </div>
        <div className="third-answer" key={questions[8].answers[2].id}>
          <div
            className={
              checkbox3 ? 'answers-container-selected' : 'answers-container'
            }
          >
            <input
              className="answer-input"
              type="checkbox"
              id={questions[8].answers[2].title}
              name={questions[8].answers[2].title}
              onChange={handleChangeCheckbox3}
            />
            <label htmlFor={questions[8].answers[2].title}>
              {questions[8].answers[2].title}
            </label>
          </div>
        </div>
        <div className="fourth-answer" key={questions[8].answers[3].id}>
          <div
            className={
              checkbox4 ? 'answers-container-selected' : 'answers-container'
            }
          >
            <input
              className="answer-input"
              type="checkbox"
              id={questions[8].answers[3].title}
              name={questions[8].answers[3].title}
              onChange={handleChangeCheckbox4}
            />
            <label htmlFor={questions[8].answers[3].title}>
              {questions[8].answers[3].title}
            </label>
          </div>
        </div>
      </div>

      <div className="buttons-container" style={{ display: 'flex' }}>
        <button className="check-result-button" onClick={checkResult}>
          Valider
        </button>
        </div>
        <div>
        <button type="button" className="" onClick={() => setPause(pause == false ? true : false) } > pause </button>
      </div>
    </div>
  );
}

export default QuestionPoivron;
