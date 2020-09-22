import React, { Component } from "react";

export default class testimonial extends Component {
  render() {
    const images = require.context("../../../assets/people", true);
    let dynamicImage = images(`./${this.props.imgUrl}`);

    return (
      <div className='testimonial__wrap'>
        <div className='testimonial-image__wrap'>
          <div
            className='testimonial-image'
            style={{ backgroundImage: `url(${dynamicImage})` }}
          ></div>
        </div>
        <div className='testimonial-copy__wrap'>
          <h2 className='testimonial-name'>{this.props.name}</h2>
          <h3 className='testimonial-relationship'>
            {this.props.relationship}
          </h3>
          <p className='testimonial-quote'>{this.props.quote}</p>
        </div>
      </div>
    );
  }
}
