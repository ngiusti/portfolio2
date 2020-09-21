import React, { Component } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/effect-cube/effect-cube.scss";

SwiperCore.use([EffectCube, Autoplay]);

export default class swiper extends Component {
  render() {
    return (
      <Swiper
        effect='cube'
        grabCursor={true}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
        }}
        speed={5000}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        <SwiperSlide className='slide'>
          <h2
            className='slide-copy'
            onClick={e => this.props.triggerModal(e)}
            id='about'
          >
            About
          </h2>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <h2
            className='slide-copy'
            onClick={e => this.props.triggerModal(e)}
            id='skills'
          >
            Skills
          </h2>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <h2
            className='slide-copy'
            onClick={e => this.props.triggerModal(e)}
            id='testimonials'
          >
            Testimonials
          </h2>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <h2
            className='slide-copy'
            onClick={e => this.props.triggerModal(e)}
            id='work'
          >
            Work
          </h2>
        </SwiperSlide>
      </Swiper>
    );
  }
}
