import React, { Component } from "react";

import Skill from "./skill/skill";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFirebase,
} from "react-icons/si";

export default class skills extends Component {
  render() {
    return (
      <div className='modal-inner__wrap'>
        <h2 className='modal-title'>Skills</h2>
        <div class='skills__wrap'>
          <Skill title='HTML' duration='4 years'>
            <SiHtml5 />
          </Skill>
          <Skill title='CSS' duration='4 years'>
            <SiCss3 />
          </Skill>
          <Skill title='JS' duration='4 years'>
            <SiJavascript />
          </Skill>
          <Skill title='React' duration='2 year'>
            <SiReact />
          </Skill>
          <Skill title='React Native' duration='2 year'>
            <SiReact />
          </Skill>
          <Skill title='Firebase' duration='1 year'>
            <SiFirebase />
          </Skill>
        </div>
      </div>
    );
  }
}
