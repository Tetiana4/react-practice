import errorImg from '../Pokemon/french-bulldog.png';
import React from 'react';

export default function PokemonError({ message }) {
  return (
    <div role="alert">
      <img src={errorImg} width="240px" alt="saddog" />
      <p>{message}</p>
    </div>
  );
}
