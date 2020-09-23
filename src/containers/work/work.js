import React, { Component } from "react";

import Project from "./project/project";
import WORK_DATA from "./workData";

export default class work extends Component {
  render() {
    const work = WORK_DATA.map(project => {
      return (
        <Project
          company={project.company}
          url={project.url}
          imgUrl={project.imgUrl}
        />
      );
    });
    return (
      <div className='modal-inner__wrap'>
        <h2 className='modal-title'>Work</h2>
        <div className='work__wrap'>{work}</div>
      </div>
    );
  }
}
