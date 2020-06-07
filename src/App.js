import React from 'react';
import './App.css';
import Hello from './Hello'

const App =({name,Surname,age}) =>  <div className="App"> <Hello Surname = {Surname}> </Hello> <h2> Name: { name }  </h2> <h2> Age: { age }</h2><h1> Pakistan Zindabad!!! </h1></div>
 


export default App;
