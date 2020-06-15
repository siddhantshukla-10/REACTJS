import React, { Component } from 'react';
import LotteryBall from './LotteryBall';
import './Lottery.css';

class Lottery extends Component{
  static defaultProps = {
    title : "Lotto",
    numBalls : 6,
    maxNum : 40
  }
  constructor(props){
    super(props);
    this.state = {nums: Array.from({length: this.props.numBalls})};
    this.handleClick = this.handleClick.bind(this);
  }

  generate(){
    this.setState(curState => ({
      nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
    }));
    
  }

  handleClick(){
    this.generate();
  }

  render(){
    return(
      <div className="Lottery">
        <h1 className="Lottery-title">{this.props.title}</h1>
        <div className="Lottery-balls">
          {this.state.nums.map(n => <LotteryBall number={n} />)}
        </div>
        <button className="Lottery-button" onClick={this.handleClick}>Generate number</button>
      </div>
    );
  }
}

export default Lottery;