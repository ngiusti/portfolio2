import React, { Component } from "react";

import Testimonial from "./testimonial/testimonial";

import TESTIMONIAL_DATA from "./testimonalData";

export default class testimonials extends Component {
  render() {
    const testimonials = TESTIMONIAL_DATA.map(testimonial => {
      return (
        <Testimonial
          name={testimonial.name}
          relationship={testimonial.relationship}
          quote={testimonial.quote}
          imgUrl={testimonial.imgUrl}
        />
      );
    });
    return (
      <div>
        <h2 className='testimonials-title'>Testimonials</h2>
        <div className='testimonials__wrap'>{testimonials}</div>
      </div>
    );
  }
}
