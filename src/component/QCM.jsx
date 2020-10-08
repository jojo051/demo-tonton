import React, { useState } from 'react';
import './QCM.css';
import Counter from './Counter';
import questions from '../data/questions';
import img from '../img/noun_grapes_3070556.png';
import { useHistory } from 'react-router-dom';

function QCM() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [result, setResult] = useState(false);
  const history = useHistory();

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
      <Counter />
      <div className="img-container">
        <img className="img-question" src={img} alt="image" />
      </div>
      <div className="question-title-container">
        <div>{questions[0].title}</div>
      </div>

      <div className="global-answers-container">
        <div className="first-answer" key={questions[0].answers[0].id}>
          <div
            className={
              checkbox1 ? 'answers-container-selected' : 'answers-container'
            }
          >
            <input
              className="answer-input"
              type="checkbox"
              id={questions[0].answers[0].title}
              name={questions[0].answers[0].title}
              onChange={handleChangeCheckbox1}
            />
            <label htmlFor={questions[0].answers[0].title}>
              {questions[0].answers[0].title}
            </label>
          </div>
        </div>
        <div className="second-answer" key={questions[0].answers[1].id}>
          <div
            className={
              checkbox2 ? 'answers-container-selected' : 'answers-container'
            }
          >
            <input
              className="answer-input"
              type="checkbox"
              id={questions[0].answers[1].title}
              name={questions[0].answers[1].title}
              onChange={handleChangeCheckbox2}
            />
            <label htmlFor={questions[0].answers[1].title}>
              {questions[0].answers[1].title}
            </label>
          </div>
        </div>
        <div className="third-answer" key={questions[0].answers[2].id}>
          <div
            className={
              checkbox3 ? 'answers-container-selected' : 'answers-container'
            }
          >
            <input
              className="answer-input"
              type="checkbox"
              id={questions[0].answers[2].title}
              name={questions[0].answers[2].title}
              onChange={handleChangeCheckbox3}
            />
            <label htmlFor={questions[0].answers[2].title}>
              {questions[0].answers[2].title}
            </label>
          </div>
        </div>
        <div className="fourth-answer" key={questions[0].answers[3].id}>
          <div
            className={
              checkbox4 ? 'answers-container-selected' : 'answers-container'
            }
          >
            <input
              className="answer-input"
              type="checkbox"
              id={questions[0].answers[3].title}
              name={questions[0].answers[3].title}
              onChange={handleChangeCheckbox4}
            />
            <label htmlFor={questions[0].answers[3].title}>
              {questions[0].answers[3].title}
            </label>
          </div>
        </div>
      </div>

      <div className="buttons-container" style={{ display: 'flex' }}>
        <button className="check-result-button" onClick={checkResult}>
          Vérifier mes résultats
        </button>
        <div className="next-button">
          {result && (
            <div
              className="next"
              onClick={() => {
                history.push('/');
              }}
            >
              Suivant
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default QCM;
