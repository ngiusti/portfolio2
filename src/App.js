import React, { Component } from "react";
import "./App.scss";

import Swiper from "./components/swiper-menu/swiper";
import Modal from "./components/modal/modal";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      modalId: "",
      show: false,
    };
  }

  modalId = event => {
    this.setState({
      modalId: event.target.id,
    });
    this.toggleModal();
    console.log(event);
  };

  toggleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='swiper-wrap'>
          <Swiper triggerModal={this.modalId} />
        </div>
        <div className='box-background'>
          <div className='box-image'></div>
        </div>
        <div
          className={`modal-screen__wrap ${this.state.show ? "show" : ""} ${
            !this.state.show ? this.state.modalId + "-modal" : ""
          }`}
        >
          <Modal
            destination={this.state.modalId}
            toggleModal={this.toggleModal}
            id='modal'
          />
        </div>
        <div className='home-about__wrap'>
          <h3>Nicholas Giusti</h3>
        </div>
      </div>
    );
  }
}
