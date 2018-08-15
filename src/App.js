import React, { Component } from 'react';
import './App.css';
import Square from './components/Square.js'
import Title from './components/title.js'
import Reset from './components/reset.js'
import Player from './components/player.js'
import Message from './components/message.js'
import Board from './components/board.js'


//players have an array each, storing values of player icons in player component
//one smart component - board
//the rest dumb components

//NOTE: HIGHER ORDER FUNCTION
  //maintains state of everything
  //will contain 'if statements' for WIN, LOSS, TIE and TURN

    // Steps for higher order function:
    // 1. Check escape conditions - win/loss or tie
      //**use return to escape function
    // 2. Check to see if its a valid move (square unoccupied or not)
    // 3. If valid move, put in array (receiving X, Y values)
    // 4. Change player turn
    // 5. Reset option make array value empty & reset player icon array & player pointer to 0

//onClick - child sending info to parent
//then parent checks with higher order function


//each square has a function
//squares send info to higher order function

//NOTE: MESSAGE COMPONENT
  //Get from this.state.player.array - pointer
  //IF - higher order function states WIN/LOSS/TIE then print WIN/LOSS/TIE
  //ELSE - pointer player's turn

//NOTE: SQUARE COMPONENT
  //onClick - sends info to parent to top level function
  //this.props.arrayXY - displays contents (x or o - or emoji)

//NOTE: PLAYER COMPONENT
  //Changes background color based on player's turn
  //Form field to take player's icon and store it in player's array

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <div className="PlayerHolder">
          <Player className="PlayerOne" />
          <Player className="PlayerTwo" />
        </div>
        <div className="board">
          <Square className="Square" id="square00" />
          <Square className="Square" id="square01" />
          <Square className="Square" id="square02" />
          <Square className="Square" id="square10" />
          <Square className="Square" id="square11" />
          <Square className="Square" id="square12" />
          <Square className="Square" id="square20" />
          <Square className="Square" id="square21" />
          <Square className="Square" id="square22" />
          <Reset />
        </div>
        <footer>
          <Message />
        </footer>
      </div>
    );
  }
}

export default App;
