import React, { Component } from "react";

import photo from "../../assets/people/pointing-up.png";

export default class about extends Component {
  render() {
    return (
      <div className='modal-inner__wrap'>
        <h2 className='modal-title'>About</h2>
        <div className='about-copy__wrap'>
          <div className='about-page-titles__wrap'>
            <h2 className='about-page-title'>Web Developer</h2>
            <h2 className='about-page-title'>Former Chemist</h2>
            <h2 className='about-page-title'>Dungeon Master</h2>
          </div>
          <p className='about-page__copy'>
            Nicholas Giusti, Web Developer by trade and dungeon master by
            choice. Been a front end developer for three years now and continue
            to discover new excitement in my career every day. I'm quite
            confident in the skills I have and yearn to develpe new ones.
          </p>
        </div>
        <div className='about-image__wrap'>
          <img src={photo} className='about-image' alt='Nick' />
        </div>
      </div>
    );
  }
}
