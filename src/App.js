import React from "react";
// import logo from "./logo.svg";
// import './App.css';
import "./styles/styles.scss";
import { Fragment } from "react";
import Curso from './Curso';

import clase from "./cursos.png"
import city from "./city.jpg"

const cursos = [
  {
    "title": "ReactJs desde 0",
    "image": clase,
    "price": 10,
    "profesor": "BETO"
  },
  {
    "title": "ReactJs desde 1",
    "image": clase,
    "price": 20,
    "profesor": "Cuevas"
  },{
    "title": "ReactJs desde 2",
    
    "price": 30,
    "profesor": "GOOO"
  }
]
// function App() {
const App = () => {
  return (
    <Fragment className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
          <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" src={city} alt="banner" />
            <div className="main-banner__data s-center">
              <p className="t2 s-mb-0">Título del banner</p>
              <p> Subtítulo del banner</p>
              <a href="#" className="button">
                Botón del banner
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="ed-grid m-grid-3">
        {/* <Curso title="ReactJs desde 0" image={clase} price="25 USD" profesor="Beto"/>
        <Curso title="ReactJs desde 1" image={clase} price="35 USD" profesor="TOBI"/>
        <Curso title="ReactJs desde 2" image={clase} price="45 USD" profesor="TOTO"/>
        <Curso title="ReactJs desde 3"  price="55 USD" profesor="TOBIAS"/>
        <Curso /> */}

        {
          /* Recorre los cursos obtendiendolo en curso*/
          cursos.map( curso => <Curso title={curso.title} image={curso.image} price={curso.price} profesor={curso.profesor} />)
        }
      </div>
    </Fragment>
  );
};

export default App;
