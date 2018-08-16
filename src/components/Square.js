import React, { Component } from 'react';

class Square extends Component {

updateSquare(e){
  let X=this.props.location[0]
  let Y=this.props.location[1]
  console.log(X,Y)
  this.props.updateValue(X,Y)
}

  render() {
    return (
      <div onClick={this.updateSquare.bind(this)} >
      {this.props.contents}
      </div>
    );
  }
}

export default Square;
