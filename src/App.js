import logo from './logo.svg';
import toast, { Toaster } from 'react-hot-toast';
import React, { Component } from 'react';
import { CountryApp } from './components/Country/CountryApp';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from './components/AppBar/AppBar';
import PokemonApp from './components/Pokemon/PokemonApp';
import { Loyout } from './components/Loyout/Loyout';
import { ReactComponent } from './components/ReactComponent/ReactComponent';
import { MainBox } from './App.styled';

export default class App extends Component {
  render() {
    return (
      <MainBox>
        {/* <AppBar /> */}
        <Toaster />
        <Routes>
          <Route path="/" element={<Loyout />}>
            <Route path="html" element={<div>Html</div>} />
            <Route path="css" element={<div>Css</div>} />
            <Route path="js" element={<div>JavaScript</div>} />
            <Route path="react" element={<ReactComponent />}>
              <Route path="pokemon" element={<PokemonApp />}></Route>
              <Route path="country" element={<CountryApp />}></Route>
            </Route>
          </Route>
        </Routes>
      </MainBox>
    );
  }
}
