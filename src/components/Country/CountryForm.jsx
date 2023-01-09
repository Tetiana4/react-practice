import React from 'react';
import toast from 'react-hot-toast';
import { Form, Input, SearchButton } from './Country.styled';

export const CountryForm = ({ onSubmit }) => {
  const handleFormSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.countryName.value;
    if (query.trim() === '') {
      return toast.error('Please, write country name');
    }
    onSubmit(query);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Input
        type="text"
        name="countryName"
        placeholder="search country"
        autoComplete="off"
      />
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
};
