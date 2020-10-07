import React from 'react';
import './Home.css';
import BorderTopHome from './BorderTopHome';
import {
  BrowserRouter as Router,
  Link,
  useHistory,
} from 'react-router-dom';

function Home() {
  const history = useHistory
  return (
    <>
      <div className="home-container">
        <BorderTopHome />
        <div className="home-title">
        <h1>Bienvenue chez tonton Sommelier</h1>
        </div>
        <div className="home-button-container" >
        <Link className="home-button" to="/">Jouer</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
