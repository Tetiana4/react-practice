import React, { Component } from 'react';
import PokemonError from './PokemonError';
import PokemonLoading from './PokemonLoading';
import pokemonAPI from '../../services/pokemon.api';
import PokemonData from './PokemonData';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      pokemonAPI
        .fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    // const { pokemonName } = this.props;
    if (status === 'idle') {
      return <div>write name pok</div>;
    }
    if (status === 'pending') {
      return <PokemonLoading pokemonName={this.props.pokemonName} />;
    }
    if (status === 'rejected') {
      return <PokemonError message={error.message} />;
    }
    if (status === 'resolved') {
      return <PokemonData pokemon={pokemon} />;
    }
  }
}
