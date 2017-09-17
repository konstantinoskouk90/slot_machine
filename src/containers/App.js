import React, { Component } from 'react';
import Wheel from '../components/Wheel';
import Result from '../components/Result';
import Play from '../components/Play';
import { wheelsNum, colorsInit, colorsArray } from '../data/settings';

class App extends Component {

  constructor() {

    super();

    this.state = {
      hasWon: false,
      hasPlayed: false,
      rndColors: colorsInit
    }
  }

  // The playGame() function starts the game
  playGame = () => {
    // Creates an array of randomly generated colors
    const random = wheelsNum.map(wheelsNum => this.generateColor());
    // Tackles async when settings state
    Promise.all(random)
      .then(results => {
        this.setState({
          hasWon: this.compareIndex(results),
          hasPlayed: true,
          rndColors: results
        });
      });
  }

  /** 
   * The compareIndex(res) function compares 
   * the elements inside the array of colors
   * and returns true or false
   */
  compareIndex = (res) => {
    // Compares array elements with each other
    return res.every((value, index, array) => value === array[0]);
  }

  /** 
   * The generateColor() function randomly selects 
   * and returns an index from the color array
   */
  generateColor = () => {
    return Math.floor(Math.random() * colorsArray.length);
  }

  // The render() function updates the DOM
  render = () => {

    /**
     * Loops through based on number of wheels defined 
     * in app settings and creates wheel components
     */
    const wheel_cmp = wheelsNum.map((wheel, index) =>
      <Wheel key={index}
        color={colorsArray[this.state.rndColors[index]]}
      />);

    return (
      <div className="fruit-machine-container">
        <div className="top-wrapper">
          <div className="title">Fruit Machine</div>
        </div>
        <div className="wheel-container">
          {wheel_cmp}
        </div>
        <Result played={this.state.hasPlayed} won={this.state.hasWon} />
        <Play start={this.playGame} />
      </div>
    );
  }
}

export default App;