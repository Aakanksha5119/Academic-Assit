import React from 'react';
import './App.css';
import About from './components/About';
import OtherResource from './components/Resources/OtherResource';
import NavBar from './components/Navigation/NavBar';


import {
  BrowserRouter,
  Routes,
  Switch,
  Route
} from "react-router-dom";
import Resource from './components/Resources/Resource';
import Home from './components/Home/Home';
import Register from './components/register/Register';
import Login from './components/Login/Login';
import NavBar2 from './components/Navigation/NavBar2';
const App = () => {
  return (
    
    
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route exact path='/Register' element={
            <React.Fragment>
              <NavBar></NavBar>
              <Register />
            </React.Fragment>

          }>
          </Route>

          <Route exact path='/' element={

            <p>
              <NavBar></NavBar>
              <About /> 
            </p>

          }>
          </Route>

          <Route exact path='/Login' element={
            <p>
              <NavBar></NavBar>
              <Login />

            </p>
          }>
          </Route>
          <Route exact path='/Home' element={
            <p>
              <NavBar2 />
              <Home />
            </p>

          }>
          </Route>
          <Route exact path='/Resource' element={
            <Resource />
          }>
          </Route>

          <Route exact path='/OtherResource' element={
            <OtherResource />
          }>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
