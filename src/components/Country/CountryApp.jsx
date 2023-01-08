import React, { Component } from 'react';
import toast from 'react-hot-toast';
import { fetchCountry } from '../../services/country.api';
import { CountryList } from './CountryList';
import { CountryForm } from './CountryForm';
import { CountryInfo } from './CountryInfo';
import { Box } from './Country.styled';
import { Audio } from 'react-loader-spinner';

export class CountryApp extends Component {
  state = {
    countryName: null,
    countries: [],
    isLoading: false,
    error: null,
    // reqStatus: 'idle',
    // idle, pending, fulfield(resolved), rejected
  };

  handleFormSubmit = countryName => {
    this.setState({ countryName });
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.countryName !== this.state.countryName) {
      this.setState({ isLoading: true });

      try {
        const countries = await fetchCountry(this.state.countryName);

        if (countries.length > 10) {
          return toast(
            'Too many matches found. Please enter a more specific name',
            {
              icon: '🤯',
            },
          );
        }
        this.setState({ countries });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { countries, isLoading, error } = this.state;
    const showCountryList = countries.length >= 2 && countries.length < 10;
    const showCountryInfo = countries.length === 1;
    return (
      <Box>
        <CountryForm onSubmit={this.handleFormSubmit} />
        {isLoading && <Audio />}
        {showCountryList && <CountryList countries={countries} />}
        {showCountryInfo && <CountryInfo country={countries[0]} />}
        {error && <p>Something wrong</p>}
        <toast />
      </Box>
    );
  }
}
