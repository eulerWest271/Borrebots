import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Components/Autonomous/Counter.js'
import ToggleCount from './Components/Autonomous/ToggleCount.js'
import Timer from './Components/Timer/timer.js'

function App() {
  return (
    <div className="App">
      <h1>Autonomous</h1>
        <Timer tiempo = {180}/>
        <Counter points = {4} tipo = 'Placing Stones' />
        <Counter points = {2} tipo ='Delivery Stones' /> 
        <Counter points = {10} tipo ='Delivery Skystones' /> 
          
        <ToggleCount tipo ='Repositioning Foundation to Building Site' puntos = {10}/>
        <ToggleCount tipo ='Robot 1' puntos = {5}/>
        <ToggleCount tipo ='Robot 2' puntos = {5}/>

      <h1>Driver Controlled</h1>
        <Counter points = {1} tipo ='Delivery Stones' /> 
        <Counter points = {1} tipo ='Placing Stones' /> 
        <Counter points = {2} tipo ='Skyscraper Bonus (Levels)' />

        <h1>End Game</h1>
        <ToggleCount tipo ='Capping 1' puntos = {5}/>
        <ToggleCount tipo ='Capping 2' puntos = {5}/>
        <ToggleCount tipo ='Moving Foundation' puntos = {15}/>
        <ToggleCount tipo ='Parking Robot 1' puntos = {5}/>
        <ToggleCount tipo ='Parking Robot 2' puntos = {5}/>

            
    </div>
  );
}

export default App;
