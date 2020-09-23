import React, { Component } from "react";

import { BsCaretRight } from "react-icons/bs";

export default class project extends Component {
  render() {
    const images = require.context("../../../assets/work", true);
    let dynamicImage = images(`./${this.props.imgUrl}`);

    return (
      <div className='project__wrap'>
        <div className='project-image__wrap'>
          <div
            className='project-image'
            style={{ backgroundImage: `url(${dynamicImage})` }}
          ></div>
        </div>
        <div className='project-copy__wrap'>
          <a
            href={this.props.url}
            className='project-name'
            rel='noopener noreferrer'
            target='_blank'
          >
            {this.props.company}
            <BsCaretRight />
          </a>
        </div>
      </div>
    );
  }
}
