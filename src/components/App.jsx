import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

export default class App extends Component {
  // state = {
  //   pokemon: null,
  //   loading: false,
  // };

  // componentDidMount() {
  //   this.setState({ loading: true });

  //   fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //     .then(res => res.json())
  //     .then(pokemon => this.setState({ pokemon }))
  //     .finally(() => this.setState({ loading: false }));
  // }

  // render() {
  //   return (
  //     <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
  //       {this.state.loading && <p>Завантажуємо</p>}
  //       {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
  //     </div>
  //   );
  // }

  state = {
    pokemonName: '',
  };

  handleSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={1500} />
      </div>
    );
  }
}
