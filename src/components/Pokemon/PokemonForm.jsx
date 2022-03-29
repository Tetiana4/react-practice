import { Component } from 'react';
import toast from 'react-hot-toast';
import React from 'react';

export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = e => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.pokemonName.trim() === '') {
      toast('Write something!');
      return;
    }
    this.props.onSubmitProp(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="pokemonName"
            value={this.state.pokemonName}
            onChange={this.handleNameChange}
          />
          <button type="submit">search</button>
        </form>
      </>
    );
  }
}
