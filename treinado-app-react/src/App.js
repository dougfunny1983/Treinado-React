import React, { Component } from 'react';
import Placarconteiner from './componets/Placarcontainer';
import dados from './data';

export default class App extends Component {
  render() {
    return (
      <div>
        <Placarconteiner {...dados} />
      </div>
    );
  }
}
