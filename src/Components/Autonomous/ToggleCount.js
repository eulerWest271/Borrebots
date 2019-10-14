import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
class ToggleCount extends Component {

    constructor(props){

        super(props)
        this.state = {

            estado : false,
            puntos:0,
        }
    }
    
    render(){

        return(
            <div>
            <h1>{this.props.tipo} : {this.state.puntos}</h1>
            <Button onClick = {()=>{
                    if(!this.state.estado){

                        this.setState({puntos: this.props.puntos, estado: !this.state.estado})
                    }
                    else{

                        this.setState({puntos: 0, estado: !this.state.estado})
                    }
                    
            }}>Estado</Button>
        
            </div>
        )
        }
}
ToggleCount.propTypes = {

    points : PropTypes.number,
    tipo: PropTypes.string
}
export default ToggleCount;