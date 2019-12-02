import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import sonido from '../../static/Sonido2.wav'
import timbre from '../../static/timbre.wav'
class Timer extends Component {

    constructor(props){

        super(props)
        let initial_date = new Date(null);
        initial_date.setSeconds(this.props.tiempo); // specify value for SECONDS here
        let result = initial_date.toISOString().substr(11, 8);
        this.state = {

            tiempo: this.props.tiempo,
            tiempo_form: result,
            enabled : true,
            clicked :false,
        }
        this.Start = this.Start.bind(this)
        this.Stop = this.Stop.bind(this)
        this.reset = this.reset.bind(this)
        this.audio = new Audio(sonido)
        this.timbre = new Audio(timbre)
        
    }
    reset (){
        this.audio.pause()
        let date = new Date(null);
                                date.setSeconds(this.props.tiempo); // specify value for SECONDS here
                                let result = date.toISOString().substr(11, 8);
        this.setState({clicked: false,enabled: false, tiempo : this.props.tiempo, tiempo_form: result})
        clearInterval(this.timer)
    }
    Start(){
        console.log('Start');
        this.setState({enabled: true})

        let auto = document.getElementById('auto')
        let driver = document.getElementById('driver')
        let endgame = document.getElementById('endgame')
        let enddiv = document.getElementById('enddiv')
        let autodiv= document.getElementById('autodiv')
        let drivediv = document.getElementById('driverdiv')
        if(!this.state.clicked){
        this.setState({clicked : !this.state.clicked})
       
        this.timer = setInterval(() =>
                    { 
                        this.audio.loop =true
                        this.audio.load()
                        this.audio.volume=1
                        this.audio.play()
                        
                        if(this.state.enabled){


                        
                            if(this.state.tiempo >this.props.lim){
                                if (this.state.tiempo>this.props.driver){

                           
                                    auto.style.color = '#57FF57'
                                    autodiv.style.border = 'solid 5px #57FF57 '
                                    drivediv.style.border = ''
                                    enddiv.style.border = ''
                                    
                                driver.style.color = 'white'
                                
                                 endgame.style.color = 'white'
                                }
                                else if(this.state.tiempo>this.props.endgame && this.state.tiempo<this.props.driver){
                                    auto.style.color = 'white'
                                    drivediv.style.border = 'solid 5px #57FF57 '
                                    autodiv.style.border = ''
                                    enddiv.style.border = ''
                                 driver.style.color = '#57FF57'
                                    endgame.style.color = 'white'
                                    
                                }
                                else if(this.state.tiempo<this.props.endgame){
                                    auto.style.color = 'white'
                                 driver.style.color = 'white'
                                 drivediv.style.border = ''
                                 auto.style.border = ''
                                 enddiv.style.border = 'solid 5px #57FF57 '
                                    endgame.style.color = '#57FF57'
                                    
                                }
                                let date = new Date(null);
                                date.setSeconds(this.state.tiempo); // specify value for SECONDS here
                                let result = date.toISOString().substr(11, 8);
                                
                                
                                
                                
                            this.setState({
                            tiempo: this.state.tiempo -1,
                            tiempo_form: result
                            
                          })}
                          else{
                              this.audio.pause()
                              
                              clearInterval(this.timer)
                            this.timbre.play()
                              
                             
                              
                          }



                        }
                   
                    }, 1000)}
                
                
            
        
    }
    Stop(){
        console.log('Stop');
        this.setState({enabled : false, clicked: false})
        clearInterval(this.timer)
        this.audio.pause()
        
        

    }
    
    render(){

        return(
            <div>
            <h1>{this.state.tiempo_form}</h1>
            <Button onClick = {this.Start}>Start</Button>
            <Button onClick = {this.Stop}>Stop</Button>
            <Button onClick = {this.reset}>Reset</Button>
            </div>
        )
        }
}
Timer.propTypes = {

    points : PropTypes.number,
    tipo: PropTypes.string
}
export default Timer;