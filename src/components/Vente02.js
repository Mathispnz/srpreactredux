import React, { Component } from 'react';
import './Vente02.scss';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getJewels, updateJewels } from './actions/jewelsActions';
import PropTypes from 'prop-types';

class Vente02 extends Component {

    componentDidMount() {
        this.props.getJewels();
    }

    onBasketClick = inBasket => {
        console.log(inBasket);
        inBasket = true;
        console.log(inBasket);
        this.props.updateJewels(inBasket);
    }

    render() {
        const { jewels } = this.props.jewel;

        return (

        <div className="whole-cont">
            <Link className="go-back" to="/mode">Retourner aux ventes</Link>
            <div className="vente-gen">
            {jewels.map(oneBijou => {
                return(
                    <div key={oneBijou.id} className="vente-sing">
                        <img src={oneBijou.image} />

                        <p className="text-rose">{oneBijou.description}</p>
                        <p>{oneBijou.price} €</p>
                        <p>Il reste {oneBijou.stock} exemplaires en stock !</p>
                        <p>{oneBijou.availability}</p>
                        <button onClick={this.onBasketClick.bind(this, oneBijou.inBasket)} className="basket">Ajouter au panier</button>
                    </div>
                )
            })}
            </div>
        </div>

        )
    }
}

Vente02.propTypes = {
    getJewels: PropTypes.func.isRequired,
    jewel: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    jewel: state.jewel
})

export default connect(mapStateToProps, { getJewels, updateJewels })(Vente02);