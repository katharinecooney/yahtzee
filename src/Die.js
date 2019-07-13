import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords:   ["one", "two", "three", "four", "five", "six"]
  }

  constructor(props){
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const {numberWords, locked, val, disabled} = this.props;
    let classes = `Die fas fa-dice-${numberWords[val - 1]}`

    if(locked) {
      classes += " Die-locked"
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
