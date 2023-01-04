import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import PokemonData from './PokemonData';
import loadingImage from './mark.jpg';
import { Loader } from './Pokemon.styled';

export default function PokemonLoading({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: loadingImage,
        },
      },
    },
    stats: [],
  };
  return (
    <>
      <Loader>
        <BallTriangle color="#af4f75" height="65" width="65" />
      </Loader>

      <PokemonData pokemon={pokemon} />
    </>
  );
}
