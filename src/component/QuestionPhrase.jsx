import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import BorderTopHome from './BorderTopHome';
import './QuestionPhrase.css';

function QuestionPhrase() {
{ /* const [value1, setValue1] = useState('');
const [value2, setValue2] = useState('');*/}
  const [bool, setBool] = useState(false);
  const [words, setWords] = useState(['constituants', 'transformation']);

  const [state, setState] = useState({
    value1: '',
    value2: ''
  })

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }



  const MAX_DURATION = 90;
  const [timeleft, setTimeleft] = useState(MAX_DURATION);
  const history = useHistory();

  useEffect(() => {
    if (timeleft > 0) {
      setTimeout(() => setTimeleft(timeleft - 1), 1000);
    } else {
      history.push('/4');
    }
  }, [timeleft, history]);

{/*  const handleChangeValue1 = (e) => {
    setValue1(e.target.value);
  };

  const handleChangeValue2 = (e) => {
    setValue2(e.target.value);
  };*/}

  const checkResult = () => {
    if (words[0] === state.value1 && words[1] === state.value2) {
      setBool(true);
      history.push('/4');
    } else {
      console.log('wrong answer');
    }
  };

  return (
    <>
      <BorderTopHome />
      <div
        className="counter-container"
        style={{ textAlign: 'center', margin: '1rem 0' }}
      >
        <h1 style={{ margin: '0' }}>{timeleft}</h1>
        <progress className="counter" max={MAX_DURATION} value={timeleft} />
      </div>
      <div className="title-container">
        <div>Trouver les mots manquants</div>
      </div>
      <div className="question-phrase-container">
        <div>
          Elle a pour but la connaissance des raisins et des vins à partir de
          l'analyse de leurs
        </div>
        <input
          className="input-phrase"
          type="text"
          name="value1"
          value={state.value1.toLowerCase()}
          onChange={handleChange}
          required
        />
        <div style={{ marginBottom: '1.5rem' }}>
          et des phénomènes chimiques et biologiques dont ils sont le siège.
        </div>
        Elle étudie la
        <input
          className="input-phrase"
          type="text"
          name="value2"
          value={state.value2.toLowerCase()}
          onChange={handleChange}
          required
        />
        <div>du raisin en vin, ainsi que la conservation du vin.</div>
      </div>
      <div
        className="check-result"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <button className="result-button" onClick={checkResult}>
          Valider
        </button>
      </div>
    </>
  );
}

export default QuestionPhrase;
