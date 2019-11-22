import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
class ToggleCount extends Component {

    constructor(props){

        super(props)
        this.state = {

            estado : false,
            puntos:0,
            id : this.props.tipo + Math.random(),
            variant : 'light'
        }
    }
    
    render(){

        return(
            <div style = {{width : '10vw', height: '20vh', margin: '10px'}}>
    
            <Button id = {this.state.id } variant  = {this.state.variant} style = {{border: 'solid 4px #42abff', borderRadius: '4px',width : '100%', height: '100%'}} onClick = {()=>{
                     let b = document.getElementById(this.state.id)
                    if(!this.state.estado){
                       b.style.backgoundColor = '#dc3545'
                       b.style.borderColor = '#ff5454'
                       
                        this.setState({puntos: this.props.puntos, variant : 'danger',estado: !this.state.estado})

                    }
                    else{
                       
                        
                        
                        b.style.borderColor = '#42abff'

                        this.setState({puntos: 0, estado: !this.state.estado, variant: 'light'})
                    }
                    
            }}><p>{this.props.tipo} : {this.state.puntos}</p></Button>
        
            </div>
        )
        }
}
ToggleCount.propTypes = {

    points : PropTypes.number,
    tipo: PropTypes.string
}
export default ToggleCount;