import React, { Component } from "react";

import face from "../../assets/people/head.png";

export default class about extends Component {
  render() {
    return (
      <div>
        <h2>About Page</h2>
        <div>
          <div>
            <h2>Web Developer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
              amet hendrerit nibh. Nullam eu placerat nunc. Nullam vel lectus eu
              justo fringilla laoreet eu et elit. Vivamus et lectus sapien.
              Donec lectus nunc, suscipit sit amet rhoncus ac, cursus a odio.
              Sed blandit dui leo, ut bibendum nulla maximus sed. Vestibulum non
              velit nec erat posuere vestibulum vel vitae leo.
            </p>
          </div>
          <div className='about-image__wrap'>
            <img className='about-image-face' src={face} />
          </div>
        </div>
      </div>
    );
  }
}
