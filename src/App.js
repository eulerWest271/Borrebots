import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Components/Autonomous/Counter.js'
import ToggleCount from './Components/Autonomous/ToggleCount.js'

function App() {
  return (
    <div className="App">
        <Counter points = {4} tipo = 'Placing Stones' />
        <Counter points = {2} tipo ='Delivery Stones' />
        <ToggleCount tipo ='Delivery Stones'/>
    </div>
  );
}

export default App;
