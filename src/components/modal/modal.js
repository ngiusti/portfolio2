import React, { Component } from "react";

import About from "../../containers/about/about";
import Skills from "../../containers/skills/skills";
import Testimonials from "../../containers/testimonials/testimonials";
import Work from "../../containers/work/work";

export default class modal extends Component {
  renderSwitch() {
    switch (this.props.destination) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "testimonials":
        return <Testimonials />;
      case "work":
        return <Work />;
      default:
        return "nothing";
    }
  }

  render() {
    return (
      <div>
        <div className='close-wrap' onClick={this.props.toggleModal}></div>
        {this.renderSwitch()}
      </div>
    );
  }
}
