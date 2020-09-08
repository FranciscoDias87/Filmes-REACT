import React, { Component } from 'react';
import './home.css';

import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: []
    }

    this.loadFilmes = this.loadFilmes.bind(this);

  }

  loadFilmes() {
    let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ filmes: json });
        console.log(json);
      })
  }

  componentDidMount() {
    this.loadFilmes();
  }

  render() {
    return (
      <div className='container'>
        <div className='lista-filmes'>
          {this.state.filmes.map((filme) => {
            return (
              <article key={filme.id}>
                <strong >{filme.nome}</strong>
                <img src={filme.foto} alt="Capa" />
                <Link to={`/filme/${filme.id}`} >Detalhes</Link>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;