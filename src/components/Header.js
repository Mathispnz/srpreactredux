import React, { Component } from 'react'
import logoSvg from './logo-srp.svg';
import './Header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="imglogo" src={logoSvg} alt="logo" />

        <form className="searchbar">
            <input type='text'></input>
            <button>🔎</button>
        </form>

        <div>
            <a href="#"><i className="far fa-sticky-note"></i></a>
            <a href="#"><i className="far fa-question-circle"></i></a>
            <Link to="/login"><i className="far fa-user-circle"></i></Link>
            <Link to="/basket"><i class="fas fa-shopping-basket"></i></Link>
        </div>
      </div>
    )
  }
}
