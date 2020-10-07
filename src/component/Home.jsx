import React from 'react';
import './Home.css';
import QuestionImgDrag from './QuestionImgDrag';
import QuestionPhrase from './QuestionPhrase';
import QuestionQCM from './QuestionQCM';
import QuetionListDrag from './QuetionListDrag';
import QuestionListDragImage from './QuestionListDragImage';

function Home() {
  return (
    <>
      <div className="home-container">
        <h1>Hello from Home</h1>
        <QuestionPhrase />
        <QuestionQCM />
        <QuetionListDrag />
        <QuestionImgDrag />
        <QuestionListDragImage />
      </div>
    </>
  );
}

export default Home;
