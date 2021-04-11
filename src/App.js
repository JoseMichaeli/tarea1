import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import PhoneScreen from './components/PhoneScreen/PhoneScreen'
import Details from './components/details/Details'
import NameList from './components/nameList/NameList'
import data from './data'

function App() {
  return (
    <BrowserRouter>
    <main>
     
      <Switch>
      <Route exact path="/">
      <section className='container'>
        <h3> Phone Numbers</h3>
        <NameList data = {data}/>
        
      </section>
      </Route>
      <Route exact path="/all">
      <section className='container'>
        <h3> Phone Numbers</h3>
        <PhoneScreen />
        
      </section>
      </Route>
      <Route exact path="/details/:id">
      <section className='container'>
        <h3>Details</h3>
        <Details  first_name = 'p' last_name ='u' number ='t' ></Details>
      </section>
      </Route>
      </Switch>
    </main>
    </BrowserRouter>
  );
}

export default App;
