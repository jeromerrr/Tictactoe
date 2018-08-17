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

//FUNCTIONS
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
      alert("The game is over. Press reset")
      return
    }

    if (tempArray[X][Y]){
      alert("That space is full, chose a different one")
    } else {
      tempArray[X][Y]=icon
      this.setState({boardArray: tempArray})
      this.props.changePlayer()
    }

    win= this.checkWin()

    if(win){
      this.props.setWon(win)
    }

  }

  resetArray(e){
    let empty=[["","",""],["","",""],["","",""]]
    this.setState({boardArray:empty})
    this.props.setWon("")
    this.props.resetPlayer()
  }

  render() {
    let squares = this.state.boardArray.map((square,i)=>{
        return (
          this.state.boardArray.map((square,j)=>{
            return (
              <Square updateValue={this.updateValue} contents={this.state.boardArray[i][j]} location={this.state.locationArray[i][j]}/>
              )
            })
          )
    })

    return (
      <div>
//BOARD SQUARES
        <div className="Board">
          {squares}
        </div>
//RESET BUTTON
        <div>
          <button className="Reset" onClick={this.resetArray.bind(this)}>
          Reset
          </button>
        </div>

      </div>
    );
  }
}

export default Board;
