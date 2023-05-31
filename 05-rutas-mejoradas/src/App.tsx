import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import { NavBar } from './commons/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Main } from './components/Main';
import { routes } from './commons/routes';
import { Button, Grid, TextField } from '@mui/material';


function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        {
          routes.map(({path, component:Component}) => (
            <Route
              key={path}
              path={path}
              element={<Component/>}
            >
            </Route>
          ))
        }
      </Routes>
      </main>
    </>
  );
}
export default App;
