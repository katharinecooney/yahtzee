import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords:   ["one", "two", "three", "four", "five", "six"],
    val: 1
  }

  constructor(props){
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const {numberWords, locked, val, disabled, isRolling} = this.props;
    let classes = `Die fas fa-dice-${numberWords[val - 1]}`

    if(locked) {
      classes += " Die-locked"
    }
    if(isRolling){
      classes += " Die-rolling"
    }
    return (
      <i
        className={classes}
        onClick={this.handleToggle}
        disabled={disabled}
      />
      
    );
  }
}

export default Die;
