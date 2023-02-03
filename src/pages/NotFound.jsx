import React from 'react';
import '../styles/NotFound.css'

const NotFound = () => {
  return (
    <section className="aquarium">
      <div className="aquarium__table">
        <div className="info">
          <p>404</p>
          <h3 className="message__wrap--title">Página no encontrada</h3>
        </div>
      </div>
      <div className="aquarium__aquarium">
        <div className="aquarium__water"></div>
        <div className="aquarium__bubble"></div>
        <div className="aquarium__bubble"></div>
        <div className="aquarium__bubble"></div>
        <div className="aquarium__bubble"></div>
        <div className="aquarium__bubble"></div>
        <div className="aquarium__bubble"></div>
        <div className="aquarium__bubble"></div>
        <div className="aquarium__bubble"></div>
      </div>
      <div className="aquarium__drops">
        <div className="aquarium__drop"></div>
        <div className="aquarium__water-column"></div>
        <div className="aquarium__splash"></div>
        <div className="aquarium__splash"></div>
      </div>
      <div className="aquarium__sponge-box">
        <div className="aquarium__body">
          <div className="aquarium__body-stripe"></div>
          <div className="aquarium__body-hole"></div>
        </div>
        <div className="aquarium__face">
          <div className="aquarium__mouth"></div>
          <div className="aquarium__smile"></div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;