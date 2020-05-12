import React, { Component } from 'react';
import Block from "./Block.js";
import { randomColour, differentRandomColour } from './helpers.js';
import shortid from "shortid";
import './Container.css';

class Container extends Component {

    constructor(props){
        super(props);
        this.state = {
            grid: this.initializeGrid()
        }
        this.changeColour = this.changeColour.bind(this);
    }

    static defaultProps = {

        //all possible colours for blocks
        colours: 
        ["#246EB9", "#4CB944", "#F5EE9E", 
        "#F06543", "#006D77", "#83C5BE", 
        "#EDF6F9", "#FFDDD2", "#E29578",
        "#757575", "#FBFBFF", "#01BAEF",
        "#FF9AA2", "#D6D5C9", "#FFE66D",
        "#FFB7B2", "#FFB7B2", "#FFDAC1",
        "#E2F0CB", "#B5EAD7", "#B5EAD7",
        "#B5EAD7", "#C7CEEA", "#D291BC"],
        numBoxes: 16
    }

    //fill initial grid with random colours
    initializeGrid(){
        const grid = Array.from({length: this.props.numBoxes});
        return grid.map(block => block = randomColour(this.props.colours));
    }

    
    selectColour(index){
        //pick a new colour for block so that it is different from the current colour of block
        const newColour = differentRandomColour(index, this.props.colours, this.state.grid);
        
        //update state
        this.setState(curState => ({
            colour: curState.grid[index] = newColour
        }));
    }

    //onClick method 
    changeColour(index){
        this.selectColour(index);
    }
    
    render() {

        const grid = this.state.grid.map( (colour, index) => <Block 
                                                    key={shortid.generate()}
                                                    index={index}
                                                    currentColour={colour}
                                                    changeColour={this.changeColour} 
                                                    />);

        return (
            <div className="Container">
                {grid}
            </div>
        )
    }
}

export default Container;