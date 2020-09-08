import React, { Component } from 'react';
import './filme.css';
import { Link } from 'react-router-dom'


class Filme extends Component {

  constructor(prop) {
    super(prop);
    this.state = {
      filme: []
    }

  }

  componentDidMount() {
    const { id } = this.props.match.params;
    let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ filme: json });
        console.log(json);
      })
  }

  render() {
    return (
      <div className='filme-info'>
        <h1>{this.state.filme.nome}</h1>
        <img src={this.state.filme.foto} alt='Capa' />
        {this.state.filme.length !== 0 &&  //mostrando o H3 (Sinopse somente quanto
          <h3>Sinopse</h3>                 //as informações forem carregadas da API
        }
        {this.state.filme.sinopse}
        {this.state.filme.length !== 0 && //mostrando link somente quanto a pag for carregada
          <Link to="/">HOME</Link>
        }
      </div>
    );
  }
}

export default Filme;
