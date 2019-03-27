import React, { Component } from 'react';
import './Basket.scss';

export default class Basket extends Component {

    totalPrice() {
        const { bijoux } = this.props;
        console.log(bijoux);

        bijoux.map(oneBijou => {
            if (oneBijou.inBasket === true) {
                let sum = [];
                oneBijou.price.push(sum);
                console.log(sum)
            }
        })
    }

    render() {
        const { bijoux } = this.props;
        
        return (
            <div className="whole-cont">
                <h3>Votre panier</h3>
                {bijoux.map(oneBijou => {
                    if(oneBijou.inBasket === true){
                        return(
                                <div className="article-container">
                                    <img className="image-width" src={oneBijou.image} />
                                    <p className="text-rose">{oneBijou.description}</p>
                                    <p>{oneBijou.price} €</p>
                                </div>
                        )
                    }
                    return null
                })}
                <p>Total: 
                    <p>{bijoux.reduce((acc, bijou) => {
                        console.log(acc);
                        return acc + bijou.price
                    })}</p>
                </p>
            </div>
        )
    }
}
