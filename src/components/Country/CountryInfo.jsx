import React from 'react';

export const CountryInfo = ({ country }) => {
  const { name, population, flag, region, capital } = country;
  return (
    <div>
      <h1>{name.common}</h1>
      <p>population: {population}</p>
      <p>region: {region}</p>
      <p>{capital}</p>
      <img src={flag} alt={flag} width="40" height="35" />
    </div>
  );
};
