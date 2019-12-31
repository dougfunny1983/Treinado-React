const data = new Date();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();

const str_data = `${dia}/${mes + 1}/${ano}`;
const str_hora = `${hora}:${min}`;

const dados = {
  partida: {
    estadio: 'Mineirão/MG',
    data: str_data,
    horario: str_hora,
  },
  casa: {
    nome: 'Cruzeiro',
  },
  visitante: {
    nome: ' Atlético',
  },
};

export default dados;
