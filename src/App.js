import React, { Component } from 'react';
import './App.css';
import Board from './components/board.js'

//NOTE: See below for pseudo-code

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      turnPointer: 0,
      playerArray: ["X","O"],
      hasWon: ""
    }
  }

//FUNCTIONS:
  changePlayer(){
    let temp = this.state.turnPointer
    console.log(temp)
    temp = temp ? 0 : 1
    this.setState({turnPointer: temp})
    console.log(temp + ' not');
    console.log(this.state.turnPointer);
  }
  setWon = (won)=>{
    this.setState({hasWon:won})
  }
  setIcon(e){
    let tempArray = this.state.playerArray;
    let index=Number(e.target.name)
    tempArray[index]=e.target.value;
    this.setState({playerArray: tempArray})
  }
  resetPlayer(){
    this.setState({turnPointer:0})
  }
  printMessage (){
    let won = this.state.hasWon
    if(won && won==="draw") return <p className="Message">Draw, like an artist!</p>
    else if(won) return <p className="Message">{this.state.hasWon} won!</p>
    else return <p className="Message">{this.state.playerArray[this.state.turnPointer]}s turn!</p>
  }


  render() {
    return (
      <div className="App">
//HEADER
        <h1 className="Title">
          Tic Tac Toe!
        </h1>
//PLAYER 1
        <div className="PlayerHolder">
          <div className="Player" id="playerOne" >
            <input className="icon" id="p1icon" name="0"
              value={this.state.value}
              onChange={this.setIcon.bind(this)}
              placeholder="X"
              />
            <p className="playerText"> Player One </p>
          </div>
//MESSAGE
          <div> {this.printMessage()} </div>
//PLAYER 2
          <div className="Player" id="playerTwo">
            <input className="icon" id="p2icon" name="1"
                value={this.state.value} onChange={this.setIcon.bind(this)} placeholder="O"
                />
            <p className="playerText"> Player Two </p>
          </div>
        </div>
//BOARD
        <Board className="Board"
          icon={this.state.playerArray[this.state.turnPointer]}
          changePlayer={this.changePlayer.bind(this)} setWon={this.setWon.bind(this)} resetPlayer={this.resetPlayer.bind(this)}
          />

      </div>
    );
  }
}

export default App;


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
