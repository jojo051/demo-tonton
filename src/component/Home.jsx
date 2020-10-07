import React from 'react';
import AppDragDropDemo from './AppDragDropDemo';
import QuestionImgDrag from './QuestionImgDrag';
import QuestionPhrase from './QuestionPhrase';
import QuestionQCM from './QuestionQCM';
import QuetionListDrag from './QuetionListDrag';
import './Home.css';

function Home() {
  return (
    <>
      <div className="home-container">
        <h1>Hello from Home</h1>
        <QuestionPhrase />
        <QuestionQCM />
        <QuetionListDrag />
        <QuestionImgDrag />
        <AppDragDropDemo />
      </div>
    </>
  );
}

export default Home;
