import React, { Component } from 'react';
import './Login.scss';
import { EventEmitter } from 'events';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleSubmit(event) {
        
    }

    handleChange(event) {
        const {value, name, email, password} = event.target;
        this.setState({[name]: value, [email]: value, [password]: value});
    }

    render() {
        return (
        <div className="login">
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label className="log-name">Name:
                    <input value={this.state.name} onChange={event => this.handleChange(event)} type="text" name="name" />
                </label>
                
                <label className="log-email">Email:
                    <input value={this.state.email} onChange={event => this.handleChange(event)} type="text" name="email" />
                </label>

                <label className="log-password">Password:
                    <input value={this.state.password} onChange={event => this.handleChange(event)} type="text" name="password" />
                </label>

                <button className="log-button">Login</button>
            </form>
        </div>
        )
    }
}
