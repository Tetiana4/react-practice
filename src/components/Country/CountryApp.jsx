import React, { Component } from 'react';
import toast from 'react-hot-toast';
import { fetchCountry } from '../../services/country.api';
import { CountryList } from './CountryList';
import { SearchForm } from './SearchForm';
import { CountryInfo } from './CountryInfo';

export class CountryApp extends Component {
  state = {
    countryName: null,
    countries: [],
    reqStatus: 'idle',
    // idle, pending, fulfield(resolved), rejected
  };

  handleFormSubmit = countryName => {
    this.setState({ countryName });
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.countryName !== this.state.countryName) {
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
    }
  }

  render() {
    const { countries } = this.state;
    const showCountryList = countries.length >= 2 && countries.length < 10;
    const showCountryInfo = countries.length === 1;
    return (
      <div>
        <SearchForm onSubmit={this.handleFormSubmit} />
        {showCountryList && <CountryList countries={countries} />}
        {showCountryInfo && <CountryInfo country={countries[0]} />}
        <toast />
      </div>
    );
  }
}
