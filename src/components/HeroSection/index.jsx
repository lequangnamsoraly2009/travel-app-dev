import React from "react";
import Button from "../Button";
import "./herosection.scss";


function HeroSection() {
  return (
    <div className="hero__container">
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>ADVENTURE</h1>
      <p>What are you waiting for?</p>
      <div className='hero__btns'>
        <Button
          className='btn'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btn'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
