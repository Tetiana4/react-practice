import { Component } from 'react';
import toast from 'react-hot-toast';
import React from 'react';
// import PokemonInfo from './PokemonInfo';
import { Input, Form, SearchButton } from './Pokemon.styled';
import { FcSearch } from 'react-icons/fc';

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
    const style = {
      width: '20px',
      height: '20px',
    };
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="pokemonName"
            placeholder="search pokemon"
            value={this.state.pokemonName}
            onChange={this.handleNameChange}
          />
          <SearchButton type="submit">
            <FcSearch style={style} />
          </SearchButton>
        </Form>
      </>
    );
  }
}
