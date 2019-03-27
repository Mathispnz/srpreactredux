import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Mode.css';

export default class Mode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ventes: [
                {
                    name: "Chaussures",
                    image: "./images/49398_bandeau_desktop_FR.jpg",
                    url: "/venten001"
                },
                {
                    name: "Bague",
                    image: "./images/49398_bandeau_desktop_FR 2.jpg",
                    url: "/venten002"
                },
                {
                    image: "./images/49398_bandeau_desktop_FR 3.jpg",
                    url: "/venten003"
                },
                {
                    image: "./images/49398_bandeau_desktop_FR 4.jpg",
                    url: "/venten004"
                },
                {
                    image: "./images/49398_bandeau_desktop_FR 5.jpg",
                    url: "/venten005"
                },
                {
                    image: "./images/49398_bandeau_desktop_FR 6.jpg",
                    url: "/venten006"
                },
                {
                    image: "./images/49398_bandeau_desktop_FR 7.jpg"
                },
                {
                    image: "./images/49398_bandeau_desktop_FR 8.jpg"
                },
                {
                    image: "./images/49398_bandeau_desktop_FR 9.jpg"
                },
                {
                    image: "./images/49398_bandeau_desktop_FR 10.jpg"
                },
                {
                    image: "./images/49398_bandeau_desktop_FR 11.jpg"
                },
                {
                    image: "./images/Bandeau FR.jpg"
                }

            ]
        }
    }


  render() {
    let allSell = this.state.ventes;

    return (
      <div className="mode">
        {allSell.map(oneSell => {
            console.log(oneSell.url)
            return(
                <div className="ventes-container">
                    <Link to={oneSell.url}>
                    <div className="vente-bandeau-container">
                    <img className="vente-image" src={oneSell.image} alt="wdgaf"/>
                    </div>
                    </Link>
                </div>
            )
        })}
      </div>
    )
  }
}
