import React, { Component } from 'react';
import './Form.scss';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nvArt: [
                {
                    id: '',
                    image: '',
                    url: '',
                    description: '',
                    stock: 0
                }
            ]
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let { name, value } = event.target;
        this.setState({[name]: value});
    }

  render() {
    return (
      <div className="form-cont">
        <form onSubmit={this.handleFormSubmit}>
            <label className="form-name"> ID: 
                <input onChange={this.handleChange} type='text' value={this.state.id} name="id" />
            </label>

            <label className="form-name"> Image: 
                <input onChange={this.handleChange} type='text' value={this.state.image} name="image" />
            </label>

            <label className="form-name"> URL:
                 <input onChange={this.handleChange} type='text' value={this.state.url} name="url" />
            </label>

            <label className="form-name"> Description:
                 <input onChange={this.handleChange} type='text' value={this.state.description} name="description" />
            </label>

            <label className="form-name"> Stock:
                <input type='number' onChange={this.handleChange} value={this.state.stock} />
            </label>

            <button>Submit</button>
        </form>
      </div>
    )
  }
}

