import React, { Component } from "react";

export default class skill extends Component {
  render() {
    return (
      <div className='skill__wrap'>
        <h2 className='skill-title'>{this.props.title}</h2>
        <div class='skill-icon'>{this.props.children}</div>
        <p className='skill-duration'>{this.props.duration}</p>
      </div>
    );
  }
}
