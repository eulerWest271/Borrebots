import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Components/Autonomous/Counter.js'
import ToggleCount from './Components/Autonomous/ToggleCount.js'
import Timer from './Components/Timer/timer.js'

function App() {
  console.log(document.getElementsByTagName('p'));
  
  return (
    <div className="App" >
        <div style = {{textAlign : 'center', width:  '100%', height: '20vh'}}>

        <Timer tiempo = {180}/>
        </div>
        
        <div style = {{float: 'left',display : 'inline-block', width: '30%', height:'80%'}}>

        <h1>Autonomous</h1>
        <div style = {{display : 'inline-block'}}>
          <Counter points = {4} tipo = 'Placing Stones' />
          <Counter points = {2} tipo ='Delivery Stones' /> 
          <Counter points = {10} tipo ='Delivery Skystones' /> 
          </div>
        <div  style = {{display : 'inline-block'}}>
        <ToggleCount tipo ='Repositioning Foundation to Building Site' puntos = {10}/>
        <ToggleCount tipo ='Robot 1' puntos = {5}/>
        <ToggleCount tipo ='Robot 2' puntos = {5}/>
        </div>
        
        
        


        </div>
        
        
      <div style = {{ float: 'left', textAlign : 'center', display: 'inline-block',width: '40%', height:'100vh'}}>
      <h1>Driver Controlled</h1>
        <div >
        <div className = 'drivemode'>
        <Counter points = {1} tipo ='Delivery Stones' /> 
        </div>
        <div className = 'drivemode'>
        
        <Counter points = {1} tipo ='Placing Stones' /> 
        </div>
        <div className = 'drivemode'>
        <Counter points = {2} tipo ='Skyscraper Bonus (Levels)' />
      
        </div>
        
         </div>
       
      </div>
      
      <div style = {{display : 'inline-block', width: '30%', height:'80%'}}>

      <h1>End Game</h1>
        <div>
          <div className = 'endgame'>
          <ToggleCount tipo ='Capping 1' puntos = {5}/>
          </div>
          <div className = 'endgame'>
        <ToggleCount tipo ='Capping 2' puntos = {5}/>
        
        </div>
        </div>
        <div>
          <div className = 'endgame'>
          <ToggleCount tipo ='Moving Foundation' puntos = {15}/>
          </div>
          <div className = 'endgame'>
            <ToggleCount tipo ='Parking Robot 1' puntos = {5}/>
            </div>
        
            </div>
        <div style = {{display: 'inline-block',textAlign : 'center'}}><ToggleCount tipo ='Parking Robot 2' puntos = {5}/></div>
        

      </div>
        
            
    </div>
  );
}

export default App;
