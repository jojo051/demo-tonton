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
        <Link className="home-button" to="/1">Jouer</Link>
        </div>
        <p style={{textAlign:"center"}}>https://main.d3rj5i38r0uxgo.amplifyapp.com/</p>
      </div>
    </>
  );
}

export default Home;
