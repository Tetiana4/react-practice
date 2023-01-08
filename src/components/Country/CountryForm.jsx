import React from 'react';
import { Form, Input, SearchButton } from './Country.styled';

export const CountryForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(e.target.elements.countryName.value);
      }}
      autoComplete="off"
    >
      <Input type="text" name="countryName" placeholder="search country" />
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
};
