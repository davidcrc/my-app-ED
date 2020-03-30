import React from "react";
import logo from "./logo.svg";
// import './App.css';
import "./styles/styles.scss";
import { Fragment } from "react";
import city from "./city.jpg"
import cursos from "./cursos.png"

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
            <img
              className="main-banner__img"
              src={city}
            />
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
        <article className="card">
          <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={cursos} alt="" />
          </div>
          <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
              Programación orientada a objetos con Go
            </h3>
            <div className="s-mb-2 s-main-center">
              <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                  <div className="circle img-container">
                    <img src="path/img" alt="" />
                  </div>
                </div>
                <span className="small">Alexys Lozada</span>
              </div>
            </div>
            <div className="s-main-center">
              <a className="button--ghost-alert button--tiny" href="#">
                $ 20USD
              </a>
            </div>
          </div>
        </article>
      </div>
    </Fragment>
  );
};

export default App;
