import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
class Counter extends Component {

    constructor(props){

        super(props)
        this.state = {

            cuenta : 0
        }
    }
    
    render(){

        return(
            <div style = {{width: '10vw', height: '20vh', margin: '10px'}}>
                <div style = {{width : '80%', height: '100%' , marginRight: '2%',display: 'inline-block'}}>
                    
                    <Button variant = 'light'style = {{border: 'solid 4px #42abff', borderRadius: '4px',width : '100%', height: '100%'}}onClick = {()=>{
                    this.setState({cuenta: this.state.cuenta + this.props.points})
            }}><p>{this.props.tipo} : {this.state.cuenta}</p></Button></div>
            <div style = {{width:'18%', height:'100%',display: 'inline-block'}}>

            <Button variant = 'danger' style = {{ border: 'solid 4px #ff5454', borderRadius: '4px', height: '100%', width: '100%'}} onClick = {()=>{
                    this.setState({cuenta: 0})
            }}></Button>
            </div>
            
            </div>
        )
        }
}
Counter.propTypes = {

    points : PropTypes.number,
    tipo: PropTypes.string
}
export default Counter;