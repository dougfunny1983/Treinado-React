import React, { Component } from 'react';
import Botargol from './Botargol';

export default class Time extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.nome} </h1>
        <h2>{this.props.gols}</h2>
        <Botargol marcarGol={this.props.marcarGol} />
      </div>
    );
  }
}
