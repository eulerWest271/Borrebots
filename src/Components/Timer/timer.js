import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
class Timer extends Component {

    constructor(props){

        super(props)
        let initial_date = new Date(null);
        initial_date.setSeconds(this.props.tiempo); // specify value for SECONDS here
        let result = initial_date.toISOString().substr(11, 8);
        this.state = {

            tiempo: this.props.tiempo,
            tiempo_form: result,
            enabled : true
        }
        this.Start = this.Start.bind(this)
        this.Stop = this.Stop.bind(this)
    }
    Start(){
        console.log('Start');
        this.setState({enabled: true})
        this.timer = setInterval(() =>
                    { 
                        if(this.state.enabled){



                            if(this.state.tiempo >0){
                                let date = new Date(null);
                                date.setSeconds(this.state.tiempo); // specify value for SECONDS here
                                let result = date.toISOString().substr(11, 8);
                                
                                
                                
                                
                            this.setState({
                            tiempo: this.state.tiempo -1,
                            tiempo_form: result
                            
                          })}
                          else{
                              clearInterval(this.timer)
                              
                          }



                        }
                   
                    }, 1000)
                
                
            
        
    }
    Stop(){
        console.log('Stop');
        this.setState({enabled : false})
        clearInterval(this.timer)
        

    }
    
    render(){

        return(
            <div>
            <h1>{this.state.tiempo_form}</h1>
            <Button onClick = {this.Start}>Start</Button>
            <Button onClick = {this.Stop}>Stop</Button>
            </div>
        )
        }
}
Timer.propTypes = {

    points : PropTypes.number,
    tipo: PropTypes.string
}
export default Timer;