import React, { Component } from 'react';
import './Vente02.scss';
import { stringify } from 'querystring';
import { Link } from 'react-router-dom';

export default class Vente02 extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {
        const { bijoux } = this.props;

        return (
        <div className="whole-cont">
            <Link className="go-back" to="/mode">Retourner aux ventes</Link>
            <div className="vente-gen">
            {bijoux.map(oneBijou => {
                return(
                    <div className="vente-sing">
                     
                        <img src={oneBijou.image} />

                        <p className="text-rose">{oneBijou.description}</p>
                        <p>{oneBijou.price} €</p>
                        <p>Il reste {oneBijou.stock} exemplaires en stock !</p>
                        <p>{oneBijou.availability}</p>
                        <button onClick={this.props.handleChange} className="basket">Ajouter au panier</button>
                    </div>
                )
            })}
            </div>
        </div>
        )
    }
}
