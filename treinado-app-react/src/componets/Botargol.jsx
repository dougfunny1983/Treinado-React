import React, { Component } from 'react';
import '../App.css';

export default class Botargol extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.marcarGol();
  };

  render() {
    return (
      <button onClick={this.handleClick.bind(this)} className='btn'>
        GOL!!!
      </button>
    );
  }
}
