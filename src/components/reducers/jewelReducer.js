import { GET_JEWELS, UPDATE_JEWELS } from '../actions/types';

const initialState = {
    jewels: [
        {
            id: "bijou01",
            image: "./images/bijou1.jpg",
            description: "Bracelet doré à l'or fin",
            price: 19.00,
            stock: 3,
            availability: ["Disponible"],
            inBasket: true
        },
        {
            id: "bijou02",
            image: "./images/bijou2.jpg",
            description: "Collier martelé doré à l'or fin",
            price: 27.00,
            stock: 1,
            availability: ["Disponible"],
            inBasket: true
        },
        {
            id: "bijou03",
            image: "./images/bijou3.jpg",
            description: "Boucles d'oreilles dorées à l'or fin",
            price: 19.00,
            stock: 5,
            availability: ["Disponible"],
            inBasket: false
        },
        {
            id: "bijou04",
            image: "./images/bijou4.jpg",
            description: "Boucles d'oreilles dorées à l'or fin",
            price: 22.00,
            stock: 5,
            availability: ["Disponible"],
            inBasket: true
        },
        {
            id: "bijou05",
            image: "./images/bijou5.jpg",
            description: "Bague ajustable dorée à l'or fin",
            price: 12.00,
            stock: 2,
            availability: ["Disponible"],
            inBasket: false
        },
        {
            id: "bijou06",
            image: "./images/bijou6.jpg",
            description: "Collier doré à l'or fin",
            price: 29.00,
            stock: 11,
            availability: ["Disponible"],
            inBasket: false
        },
      ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_JEWELS:
            return {
                ...state
            }
        case UPDATE_JEWELS:
            return {
                ...state,
                jewels: state.jewels
            }
        default: 
            return state;
    }
}

