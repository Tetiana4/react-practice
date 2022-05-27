import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import PokemonData from './PokemonData';
import loadingImage from './mark.jpg';

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
    <div>
      <div>
        <BallTriangle color="#00BFFF" height={80} width={80} />
        Searching
      </div>
      <PokemonData pokemon={pokemon} />
    </div>
  );
}
