import logo from './logo.svg';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import React, { Component } from 'react';
import PokemonForm from './components/Pokemon/PokemonForm';
import PokemonInfo from './components/Pokemon/PokemonInfo';
import { CountryApp } from './components/Country/CountryApp';

export default class App extends Component {
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
      <div>
        {/* <PokemonForm onSubmitProp={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} /> */}
        <Toaster />
        <CountryApp />
        {this.state.loading && <h1>Loading</h1>}
        {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
      </div>
    );
  }
}
