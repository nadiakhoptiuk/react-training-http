import { Component } from 'react';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      console.log('Змінилось імя покемона');

      this.setState({ status: 'pending' });
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
        .then(responce => {
          if (responce.ok) {
            return responce.json();
          }
          return Promise.reject(
            new Error(`Немає покемона з іменем ${this.props.pokemonName}`)
          );
        })
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;

    if (status === 'idle') {
      return <p>Введіть імя покемона</p>;
    }

    if (status === 'pending') {
      return <p>Завантажуємо...</p>;
    }

    if (status === 'rejected') {
      return <p>{error.message}</p>;
    }

    if (status === 'resolved') {
      return (
        <div>
          <p>{pokemon.name}</p>
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            width="240"
            alt={pokemon.name}
          ></img>
        </div>
      );
    }

    // return (
    //   <div>
    //     <h1>PokemonInfo</h1>
    //     {error && <p>Покемона з іменем {pokemonName} немає</p>}
    //     {loading && <p>Завантажуємо...</p>}
    //     {!pokemonName && <p>Введіть імя покемона</p>}
    //     {pokemon && (
    //       <div>
    //         <p>{pokemon.name}</p>
    //         <img
    //           src={pokemon.sprites.other['official-artwork'].front_default}
    //           width="240"
    //           alt={pokemon.name}
    //         ></img>
    //       </div>
    //     )}
    //   </div>
    // );
  }
}
