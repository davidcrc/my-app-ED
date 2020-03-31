import React from 'react'
import city from "./city.jpg"

const Baner = () => (

    <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src={city} alt="banner" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Curso de ReactJS</p>
          <p> Subtítulo del banner</p>
          <a href="#" className="button">
            Botón del curso
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Baner;