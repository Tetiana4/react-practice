import React, { Component } from 'react';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

export default class PokemonApp extends Component {
  state = {
    pokemon: null,
    pokemonName: ' ',
    loading: false,
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <>
        <PokemonForm onSubmitProp={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
      </>
    );
  }
}
