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
            <div>
            <h1>{this.props.tipo} : {this.state.cuenta}</h1>
            <Button onClick = {()=>{
                    this.setState({cuenta: this.state.cuenta + this.props.points})
            }}>Este es el contador</Button>
            <Button onClick = {()=>{
                    this.setState({cuenta: 0})
            }}>Este es el contador</Button>
            </div>
        )
        }
}
Counter.propTypes = {

    points : PropTypes.number,
    tipo: PropTypes.string
}
export default Counter;