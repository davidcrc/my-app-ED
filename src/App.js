import React from "react";
// import logo from "./logo.svg";
// import './App.css';
import "./styles/styles.scss";
import { Fragment } from "react";
import Curso from './Curso';

import clase from "./cursos.png"
// import city from "./city.jpg"

import Baner from './Baner'
import Formulario from './Formulario'

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

      <Baner></Baner>

      <Formulario></Formulario>
    </Fragment>
  );
};

export default App;
