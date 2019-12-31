import React, { Component } from 'react';
import Time from './Time';
import Partida from './Partida';
import '../App.css';

export default class Placarcontainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      golsCasa: 0,
      golsVisitante: 0,
    };
  }

  marcaGolsCasa = () => {
    this.setState({
      golsCasa: this.state.golsCasa + 1,
    });
  };

  marcaGolsVisitante = () => {
    this.setState({
      golsVisitante: this.state.golsVisitante + 1,
    });
  };
  render() {
    const { partida, casa, visitante } = this.props;
    const { golsCasa, golsVisitante } = this.state;
    return (
      <div className='divPrincipal'>
        <div className='conteiner'>
          <h3>Casa</h3>
          <Time
            nome={casa.nome}
            gols={golsCasa}
            marcarGol={this.marcaGolsCasa}
          />
        </div>
        <div className='conteiner'>
          <Partida {...partida} />
        </div>
        <div className='conteiner'>
          <h3>Visitante</h3>
          <Time
            nome={visitante.nome}
            gols={golsVisitante}
            marcarGol={this.marcaGolsVisitante}
          />
        </div>
      </div>
    );
  }
}
