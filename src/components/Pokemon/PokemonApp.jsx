import React, { Component } from 'react';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';
import { Box } from './Pokemon.styled';

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
      <Box>
        <PokemonForm onSubmitProp={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
      </Box>
    );
  }
}
