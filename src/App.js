import React, { useState, useEffect } from 'react';
import Slide from './components/Slide';
import Slider from './components/Slider';
import data from './data';

const App = () => {
  //DATA
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSlide, setShowSlide] = useState(data[currentSlide]);
  const arrayLength = data.length //4

  //FUNCTION
  const slideForward = () => {
    if (currentSlide < arrayLength - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    else {
      setCurrentSlide(0);
    }
    setShowSlide(data[currentSlide]);
  }

  const slideBackward = () => {
    if (currentSlide === 0) {
      setCurrentSlide(arrayLength - 1);
    }
    else {
      setCurrentSlide(currentSlide - 1);
    }
    setShowSlide(data[currentSlide]);
  }

  //COMPONENT
  return (
    <div className="container pt-5">
      {/* Title */}
      <h1 className="title has-text-centered">Our vacation</h1>

      {/* Slide */}
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Slide key={showSlide.id} {...showSlide} />
        </div>
      </div>

      {/* Slider */}
      <Slider slideForward={slideForward} slideBackward={slideBackward} />
    </div>
  )
}

export default App