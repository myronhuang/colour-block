import React, { Component } from 'react';
import './helpers';
import './Block.css';

class Block extends Component {

    constructor(props){
        super(props);
        this.handleChangeColour = this.handleChangeColour.bind(this);
    }

    handleChangeColour(){
        this.props.changeColour(this.props.index);
    }


    render() {
        return (
            <div 
                onClick={this.handleChangeColour}
                className='Block-Container'
                style={{backgroundColor: this.props.currentColour}}>
            </div>
        )
    }
}

export default Block;