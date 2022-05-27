// import logo from './logo.svg';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import React, { Component } from 'react';
import PokemonForm from './components/Pokemon/PokemonForm';
import PokemonInfo from './components/Pokemon/PokemonInfo';
export default class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };
  // componentDidMount() {
  //   this.setState({ loading: true });
  //   fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //     .then(res => res.json())
  //     .then(pokemon => this.setState({ pokemon }))
  //     .finally(() => this.setState({ loading: false }));
  // }

  render() {
    return (
      <div>
        <PokemonForm onSubmitProp={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <Toaster />
        {/* {this.state.loading && <h1>Loading</h1>}
        {this.state.pokemon && <div>{this.state.pokemon.name}</div>} */}
      </div>
    );
  }
}
