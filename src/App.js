import React from 'react';
import './App.css';
import Hello from './Hello'

const App =({name,SirName,age}) =>  <div className="App"> <Hello SirName = {SirName}> </Hello> <h1> Pakistan Zindabad!!! Name: { name }  </h1> <h2> Pakistan Zindabad!!! Age: { age - 11 }</h2><h3> Pakistan Zindabad!!! </h3></div>
 


export default App;
