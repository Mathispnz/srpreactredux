import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import { Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// Components
import Mode from './components/Mode';
import Login from './components/Login';
import Footer from './components/Footer';
import Minisite from './components/Minisite';
import Vente02 from './components/Vente02';
import Basket from './components/Basket';
import Form from './components/Form';
import HomePage from './components/HomePage';
import Map from './components/Map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      inBasket: true
    })
  }

  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <Header />
          <NavBar />
          <Switch>
            <Route exact path='/' render={() => {
              return <HomePage />
            }} />
            <Route path='/mode' render={() => {
              return <Mode />}} />
            <Route path='/srp-map' render={() => {
              return <Map />
            }} />
            <Route path='/login' render={() => {
              return <Login />
            }} />
            <Route path='/minisites' render={() => {
              return <Minisite />
            }} />
            <Route path='/venten002' render={() => {
              return <Vente02 />
            }} />
            <Route path='/basket' render={() => {
              return <Basket 
                bijoux = { this.state.bijoux }/>
            }} />
            <Route path='/ajouterdata' render={() => {
              return <Form />
            }} />
          </Switch>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
