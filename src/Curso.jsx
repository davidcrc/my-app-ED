import React from 'react';
import PropTypes from 'prop-types'
// import cursos from "./cursos.png"
import city from "./city.jpg"


// const Curso = (title, image, profesor, price) => (
const Curso = (props) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      {/*
        props.image
        ? <img src={props.image} alt={props.title} />
        : <center> <p>Sin imagen</p> </center>
        */
      }
      
      {/* Existen diferentes formas de validar el img, AUNQ TAMBIEN PODEMOS 
      UTILIZA LA LIBRERIA PROPYPES */}
      {/* <img src={props.image?props.image: city} alt={props.title} /> */}

      <img src={props.image} alt={props.title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        { props.title }
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="path/img" alt="" />
            </div>
          </div>
          <span className="small">Prof: {props.profesor}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">
          { `$ ${props.price}`}   {/* ASi podemos crear una concatenacion del string y resolver la variable con $ */}
        </a>
      </div>
    </div>
  </article>
)

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any,
  price: PropTypes.string,
  profesor: PropTypes.string
}

Curso.defaultProps = {
  title: "No se encontró título",
  image: city,
  price: "--",
  profesor: "--"
}

export default Curso;
