import React from 'react';
import QuestionPhrase from './QuestionPhrase';
import QuestionQCM from './QuestionQCM';
import './Home.css';

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
