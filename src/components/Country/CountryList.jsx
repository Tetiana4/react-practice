import React from 'react';

export const CountryList = ({ countries }) => {
  return (
    <ul>
      {countries.map(({ name, flag }) => (
        <li key={name}>
          {name.common}
          <img src={flag} alt={flag} />
        </li>
      ))}
    </ul>
  );
};
