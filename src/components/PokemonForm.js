import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
const styles = { form: { marginBottom: 20 } };

export default class PokemonForm extends Component {
  state = { pokemonName: '' };

  handleNameChange = evt => {
    this.setState({ pokemonName: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      toast.error('Введіть імя покемона', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
      this.setState({ pokemonName: '' });
      return;
    }
    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    const { pokemonName } = this.state;

    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <BsSearch style={{ marginRight: 8 }} /> Знайти
        </button>
      </form>
    );
  }
}
