import React from 'react';
import './Example.css';

import Counter from './Counter';

import questions from '../data/questions';
import img from '../img/noun_grapes_3070556.png';

function Example() {
  return (
    <>
      <Counter />
      <div className="img-container">
        <img className="img-question" src={img} alt="image" />
      </div>
      <div className="question-title-container">
        <div>{questions[0].title}</div>
      </div>

      {questions[0].answers.map((q) => (
        <div className="answers-container">
          <div>{q.title}</div>
        </div>
      ))}
    </>
  );
}

export default Example;
