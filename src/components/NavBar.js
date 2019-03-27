import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <nav className="navbar">
            <Link to="/"><i className="fas fa-home"></i></Link>
            <Link to="/mode">Mode</Link>
            <a href="#">Beauté</a>
            <a href="#">Maison</a>
            <a href="#">Voyages</a>
            <Link to="/minisites">Mini sites</Link>
            <Link to="/ajouterdata">Ajouter</Link>
        </nav>
      </div>
    )
  }
}
