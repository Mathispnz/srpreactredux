import React, { Component } from 'react';
import './Basket.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getJewels } from './actions/jewelsActions';

class Basket extends Component {

    componentDidMount() {
        this.props.getJewels();
    }

    render() {
        const { jewels } = this.props.jewel;

        for (let i = 0; i < jewels.length; i++) {
            let sum = 0;
            sum = jewels.price;
            console.log(sum);
        }

        let allPrices = jewels.map(oneBijou => oneBijou.price);
        console.log(allPrices);

        let basketPrices = jewels.filter(oneBijou => {
            if (oneBijou.inBasket === true) {
                return oneBijou.price;
            }
        }).map((oneBijou) => {
            return oneBijou.price;
        })
        console.log(basketPrices);
        
        return (
            <div className="whole-cont">
                <h3>Votre panier</h3>
                {jewels.map(oneBijou => {
                    if(oneBijou.inBasket === true){
                        return(
                                <div key={oneBijou.id} className="article-container">
                                    <img className="image-width" src={oneBijou.image} />
                                    <p className="text-rose">{oneBijou.description}</p>
                                    <p>{oneBijou.price} €</p>
                                </div>
                        )
                    }
                    return null
                })}
                <p>Total:
                    {    
                        basketPrices.reduce((acc, current) => acc + current)
                    }
                    €
                </p>
            </div>
        ) 
    }
}

Basket.propTypes = {
    getJewels: PropTypes.func.isRequired,
    jewel: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    jewel: state.jewel
})

export default connect(mapStateToProps, { getJewels })(Basket);