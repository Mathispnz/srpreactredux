import React, { Component } from 'react';
import './Minisite.scss';

export default class Minisite extends Component {
  render() {
    return (
      <div className="mn-cont">
        <div className="toup">
            <div className="toup-text">
                <h3>Toupargel</h3>
                <p>6 mars, intégration du site Toupargel pour une opération médias au sein d'SRP</p>
            </div>

            <img className="ill-toup" src="./images/toupargel.png" alt="toupargel" />
        </div>

        <div className="pl">

        </div>

        <div className="toup inverse">
            <div className="toup-text inverse-text">
                <h3>Paylib</h3>
                <p>Entraînement sur une opération précédente</p>
            </div>

            <img className="ill-toup" src="./images/paylib.png" alt="toupargel" />
        </div>

        <div className="pl">

        </div>
      </div>
    )
  }
}
