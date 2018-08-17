import React, { Component } from 'react';
import './board.css'

class Square extends Component {

updateSquare(e){
  let X=this.props.location[0]
  let Y=this.props.location[1]
  console.log(X,Y)
  this.props.updateValue(X,Y)
}

  render() {
    return (
      <div className="Squares" onClick={this.updateSquare.bind(this)} >
      <p className="squareContent">
      {this.props.contents}</p>
      </div>
    );
  }
}

export default Square;
