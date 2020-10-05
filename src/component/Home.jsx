import React from 'react';
import './Home.css';
import QuestionPhrase from './QuestionPhrase';
import QuestionQCM from './QuestionQCM';

function Home() {
  return (
    <>
      <div className="home-container">
        <h1>Hello from Home</h1>
        <QuestionPhrase />
        <QuestionQCM />
      </div>
    </>
  );
}

export default Home;
