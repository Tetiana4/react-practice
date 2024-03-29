import logo from './logo.svg';
import toast, { Toaster } from 'react-hot-toast';
import React, { Component } from 'react';
import { CountryApp } from './components/Country/CountryApp';
import { Routes, Route } from 'react-router-dom';
import { FormApp } from './components/Form/FormApp';
import PokemonApp from './components/Pokemon/PokemonApp';
import { Loyout } from './components/Loyout/Loyout';
import { ReactComponent } from './components/ReactComponent/ReactComponent';
import { MainBox } from './App.styled';
import { StepOne } from './components/Form/StepOne';
import { StepTwo } from './components/Form/StepTwo';
import { Result } from './components/Form/Result';

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
              <Route path="form" element={<FormApp />}>
                <Route path="" element={<StepOne />}></Route>
                <Route path="step2" element={<StepTwo />}></Route>
                <Route path="step2/result" element={<Result />}></Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </MainBox>
    );
  }
}
