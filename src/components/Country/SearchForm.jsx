import React from 'react';

export const SearchForm = ({ onSubmit }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(e.target.elements.countryName.value);
      }}
      autoComplete="off"
    >
      <input type="text" name="countryName" />
      <button type="submit">Search</button>
    </form>
  );
};
