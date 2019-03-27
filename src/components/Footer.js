import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-pictos">
            <div className="footer-picto">
                <i className="fas fa-mobile"></i>
                <p className="title-pictos">Service client</p>

                <p>Directement en ligne sur notre page <span>Aide & Contact</span></p>
            </div>

            <div className="footer-picto">
                <i className="fas fa-users"></i>
                <p className="title-pictos">Parrainez vos amis !</p>

                <form>
                    <input placeholder="Email de votre ami(e)"></input>
                    <button>Parrainez</button>
                </form>
            </div>

            <div className="footer-picto">
                <i className="far fa-thumbs-up"></i>
                <p className="title-pictos">Suivez-nous !</p>

            </div>
        </div>
      </div>
    )
  }
}
