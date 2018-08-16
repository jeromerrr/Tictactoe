import React, { Component } from 'react';
import Square from './Square.js'
import './board.css'

class Board extends Component {
  constructor(props){
    super(props)
    this.state ={
      boardArray:[
      ["","",""],
      ["","",""],
      ["","",""]
      ],
      locationArray: [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
      ],
      icon:""
    }
  }


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

  checkWin = () => {
      let array=this.state.boardArray
      for(let i =0; i<3;i++){
        if(array[i][0]&&(array[i][0]===array[i][1])&&(array[i][1]===array[i][2]))
        {
        console.log(array[i][0] + " win")
        return array[i][0]
        }
      }
      for(let i =0; i<3;i++){
        if(array[0][i]&&(array[0][i]===array[1][i])&&(array[1][i]===array[2][i])){
          console.log(array[0][i] + ' win');
          return array[0][i]
        }
      }
      if(array[0][0]&&(array[0][0]===array[1][1])&&(array[1][1]===array[2][2])){
        console.log(array[0][0] + ' win');
        return array[0][0]
      }
      if(array[2][0]&&(array[2][0]===array[1][1])&&(array[1][1]===array[0][2])){
        console.log(array[2][0] + ' win')
        return array[2][0]
      }
      for(let i =0; i<3;i++){
        for(let j=0; j<3;j++){
          if(array[i][j]===""){
            console.log('theres still spaces on board')
            return ""
          }
        }
      }
      return "draw"
    }



  updateValue = (X,Y) => {
    let icon=this.props.icon
    let tempArray = this.state.boardArray.slice()
    let win= this.checkWin()

    if(win){
      return
    }

    if (tempArray[X][Y]){
      console.log("that space is full")
    } else {
      tempArray[X][Y]=icon
      this.setState({boardArray: tempArray})
      this.props.changePlayer()
    }

    win= this.checkWin()

    if(win){
      if(win==="draw"){
        alert("DRAW")
        console.log("It's a draw")
      }
      else {
        alert(win+" Wins!")
        console.log(win+" Wins!")
      }

    }

  }

  resetArray(e){
    let empty=[["","",""],["","",""],["","",""]]
    this.setState({boardArray:empty})
  }

  render() {
    // let squares = this.state.boardArray.map((Square,i)=>{
    //   return (
    //     this.state.boardArray[i].map((Square,j)=>{
    //       return (
    //         <Square className="Square" id={`square${i}${j}`} updateValue={this.updateValue} contents={this.state.boardArray[i][j]}
    //         location={this.state.locationArray[i][j]}
    //         />
    //       )
    //     })
    //   )
    // })

    return (
      <div>
      <div className="Board">
        <Square className="Square" id="square00"
        updateValue={this.updateValue}
        contents={this.state.boardArray[0][0]}
        location={this.state.locationArray[0][0]}/>
        <Square className="Square" id="square01" updateValue={this.updateValue} contents={this.state.boardArray[0][1]}
        location={this.state.locationArray[0][1]}/>
        <Square className="Square" id="square02" updateValue={this.updateValue} contents={this.state.boardArray[0][2]}
        location={this.state.locationArray[0][2]}/>

        <Square className="Square" id="square10" updateValue={this.updateValue} contents={this.state.boardArray[1][0]}
        location={this.state.locationArray[1][0]}/>
        <Square className="Square" id="square11" updateValue={this.updateValue} contents={this.state.boardArray[1][1]}
        location={this.state.locationArray[1][1]}/>
        <Square className="Square" id="square12" updateValue={this.updateValue} contents={this.state.boardArray[1][2]}
        location={this.state.locationArray[1][2]}/>

        <Square className="Square" id="square20" contents={this.state.boardArray[2][0]} updateValue={this.updateValue}
        location={this.state.locationArray[2][0]}/>
        <Square className="Square" id="square21" updateValue={this.updateValue} contents={this.state.boardArray[2][1]}
        location={this.state.locationArray[2][1]}/>
        <Square className="Square" id="square22" updateValue={this.updateValue} contents={this.state.boardArray[2][2]}
        location={this.state.locationArray[2][2]}/>

      </div>

      <div>
        <button className="Reset" onClick={this.resetArray.bind(this)}>
        reset button
        </button>
      </div>

      </div>
    );
  }
}

export default Board;
