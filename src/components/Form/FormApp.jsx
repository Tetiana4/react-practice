import React from 'react';
// import { Routes, Route, Outlet } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Header } from './Header';
import { StepOne } from './StepOne';
// const navItem = [{ href: 'step2' }, { href: 'step3' }, { href: 'result' }];
export const FormApp = () => {
  return (
    <>
      <Header />
      {/* <StepOne /> */}
      {/* <nav>
        <ul>
          <li>
            <NavLink to="step2">Thdhsd</NavLink>
          </li>
          <li>
            <NavLink to="result">Result</NavLink>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  );
};
