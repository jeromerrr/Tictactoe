import React, { Component } from 'react';
import Square from './3dSquare.js'
import './board.css'

class Board extends Component {
  constructor(props){
    super(props)
    this.state ={
      boardArray:[
      [["","",""],
      ["","",""],
      ["","",""]],
      [["","",""],
      ["","",""],
      ["","",""]],
      [["","",""],
      ["","",""],
      ["","",""]]
      ],
      locationArray: [
        [[[0,0,0],[0,0,1],[0,0,2]],
        [[0,1,0],[0,1,1],[0,1,2]],
        [[0,2,0],[0,2,1],[0,2,2]]],

        [[[1,0,0],[1,0,1],[1,0,2]],
        [[1,1,0],[1,1,1],[1,1,2]],
        [[1,2,0],[1,2,1],[1,2,2]]],

        [[[2,0,0],[2,0,1],[2,0,2]],
        [[2,1,0],[2,1,1],[2,1,2]],
        [[2,2,0],[2,2,1],[2,2,2]]]
      ],
      icon:""
    }
  }


  checkWin = () => {
      let array=this.state.boardArray
      for(let h=0;h<3;h++){
        for(let i =0; i<3;i++){
          for(let j=0; j<3;j++){
            if(array[h][i][j]===""){
              console.log('theres still spaces on board')
              return ""
            }
          }
        }
      }
      //2D horizontal
      for(let h=0; h<3;h++){
        for(let i =0; i<3;i++){
          if(array[h][i][0]&&(array[h][i][0]===array[h][i][1])&&(array[h][i][1]===array[h][i][2]))
          {
          console.log(array[h][i][0] + " win")
          return array[h][i][0]
          }
        }
      }
      //2d vertical
      for(let h =0; h<3;h++){
        for(let i =0; i<3;i++){
          if(array[h][0][i]&&(array[h][0][i]===array[h][1][i])&&(array[h][1][i]===array[h][2][i])){
            console.log(array[h][0][i] + ' win');
            return array[h][0][i]
          }
        }
      }
      //3d vertical
      for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
          if(array[0][i][j]&&array[0][i][j]===array[1][i][j]&&array[0][i][j]===array[2][i][j]){
            console.log(array[0][i][j]+" wins")
            return array[0][i][j]
          }
        }
      }
      //horizontal diagonals
      for(let h=0;h<3;h++){
        if(array[h][0][0]&&(array[h][0][0]===array[h][1][1])&&(array[h][1][1]===array[h][2][2])){
          console.log(array[h][0][0] + ' win');
          return array[h][0][0]
        }
        if(array[h][2][0]&&(array[h][2][0]===array[h][1][1])&&(array[h][1][1]===array[h][0][2])){
          console.log(array[h][2][0] + ' win')
          return array[h][2][0]
        }
      }
      //3d right diagonals
      for(let i = 0; i<3; i++){
        if(array[0][i][0]&&(array[0][i][0]===array[1][i][1])&&(array[0][i][0]===array[2][i][2])){
          console.log(array[0][i][0] + "wins")
          return array[0][i][0]
        }
      }
      //3d left diagonals
      for(let i = 0; i<3; i++){
        if(array[0][i][2]&&(array[0][i][2]===array[1][i][1])&&(array[0][i][2]===array[2][i][0])){
          console.log(array[0][i][2] + "wins")
          return array[0][i][2]
        }
      }
      //3d forward diagonals
      for(let j=0;j<3;j++){
        if(array[0][0][j]&&(array[0][0][j]===array[1][1][j])&&(array[0][0][j]===array[2][2][j])){
          console.log(array[0][0][j]+" wins")
          return array[0][0][j]
        }
      }
      //3d backwards diagonals
      for(let j=0;j<3;j++){
        if(array[0][2][j]&&(array[0][2][j]===array[1][1][j])&&(array[0][2][j]===array[2][0][j])){
          console.log(array[0][0][j]+" wins")
          return array[0][0][j]
        }
      }
      //3d diagonal diagonals
      if(array[1][1][1]&&(array[0][0][0]===array[1][1][1])&&(array[2][2][2]===array[1][1][1])) {
        console.log(array[1][1][1]+ " wins");
        return array[1][1][1]
      }
      if(array[1][1][1]&&(array[0][0][2]===array[1][1][1])&&(array[2][2][0]===array[1][1][1])) {
        console.log(array[1][1][1]+ " wins");
        return array[1][1][1]
      }
      if(array[1][1][1]&&(array[0][2][0]===array[1][1][1])&&(array[2][0][2]===array[1][1][1])) {
        console.log(array[1][1][1]+ " wins");
        return array[1][1][1]
      }
      if(array[1][1][1]&&(array[0][2][2]===array[1][1][1])&&(array[2][0][0]===array[1][1][1])) {
        console.log(array[1][1][1]+ " wins");
        return array[1][1][1]
      }

      return "draw"
    }

  updateValue = (X,Y,Z) => {
    let icon=this.props.icon
    let tempArray = this.state.boardArray.slice()
    let win= this.checkWin()

    if(win){
      alert("The game is over. Press reset")
      return
    }

    if (tempArray[X][Y][Z]){
      alert("That space is full, chose a different one")
    } else {
      tempArray[X][Y][Z]=icon
      this.setState({boardArray: tempArray})
      this.props.changePlayer()
    }

    win= this.checkWin()

    if(win){
      this.props.setWon(win)
    }

  }

  resetArray(e){
    let empty=[[["","",""],["","",""],["","",""]], [["","",""],["","",""],["","",""]], [["","",""],["","",""],["","",""]]]
    this.setState({boardArray:empty})
    this.props.setWon("")
    this.props.resetPlayer()
  }

  render() {
    let squares = this.state.boardArray.map((square,i)=>{
        return (
          this.state.boardArray.map((square,j)=>{
            return (
              this.state.boardArray.map((square,k)=>{
                return (
              <Square updateValue={this.updateValue} contents={this.state.boardArray[i][j][k]} location={this.state.locationArray[i][j][k]}/>
            )}))
            }
            )
          )
    })

    return (
      <div>
        <div className="Board">
          {squares}
        </div>

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
