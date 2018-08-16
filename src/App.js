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
  constructor(props){
    super(props)
    this.state = {
      turnPointer: 1,
      playerArray: ["X","O"]
    }
  }
  changePlayer(){
    let temp = this.state.turnPointer
    console.log(temp)
    temp = temp ? 0 : 1
    this.setState({turnPointer: temp})
    console.log(temp + ' not');
    console.log(this.state.turnPointer);
  }

  setIcon(e, index){
    // let tempIcons = this.state.playerArray.slice()
    // tempIcons[index]= e.target.value
    // this.setState({playerArray: tempIcons})
  }

  render() {
    return (
      <div className="App">

        <h1 className="Title">
          Tic Tac Toe!
        </h1>

        <div className="PlayerHolder">

          <div className="Player" id="playerOne" >
            <input className="icon" id="p1icon" value={this.state.playerArray[0]}
            onChange={this.setIcon.bind(this, 0)}
            index={0}/>
            <p> Player One </p>
          </div>

          <div className="Player" id="playerTwo">
            <input className="icon" id="p2icon" value={this.state.playerArray[1]} onChange={this.setIcon.bind(this, 1)}
            index="1" />
            <p> Player Two </p>
          </div>

        </div>


        <Board className="Board" icon={this.state.playerArray[this.state.turnPointer]}
        changePlayer={this.changePlayer.bind(this)}/>


        <footer className="Footer">
          <p className="Message"> Player one turn </p>
        </footer>

      </div>
    );
  }
}

export default App;
