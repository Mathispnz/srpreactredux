import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import { Switch, Route, Link } from 'react-router-dom';

// Components
import Mode from './components/Mode';
import Login from './components/Login';
import Footer from './components/Footer';
import Minisite from './components/Minisite';
import Vente02 from './components/Vente02';
import Basket from './components/Basket';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bijoux: [
        {
            id: "bijou01",
            image: "./images/bijou1.jpg",
            description: "Bracelet doré à l'or fin",
            price: 19.00,
            stock: 3,
            availability: ["Disponible"],
            inBasket: false
        },
        {
            id: "bijou02",
            image: "./images/bijou2.jpg",
            description: "Collier martelé doré à l'or fin",
            price: 24.00,
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
            price: 19.00,
            stock: 5,
            availability: ["Disponible"],
            inBasket: false
        },
        {
            id: "bijou05",
            image: "./images/bijou5.jpg",
            description: "Bague ajustable dorée à l'or fin",
            price: 12.00,
            stock: 2,
            availability: ["Disponible"],
            inBasket: true
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
  }

  handleChange() {
    this.setState({
      inBasket: true
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Switch>
          <Route path="/mode" render={() => {
            return <Mode />}} />
          <Route path="/login" render={() => {
            return <Login />
          }} />
          <Route path="/minisites" render={() => {
            return <Minisite />
          }} />
          <Route path="/venten002" render={() => {
            return <Vente02 
              bijoux = {this.state.bijoux}
              handleChange = {this.state.handleChange}
               />
          }} />
          <Route path="/basket" render={() => {
            return <Basket 
              bijoux = { this.state.bijoux }/>
          }} />
          <Route path="/ajouterdata" render={() => {
            return <Form />
          }} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
