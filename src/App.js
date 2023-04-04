import React, { useState, useEffect } from 'react';
import Slide from './components/Slide';
import Slider from './components/Slider';
import data from './data';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [showSlide, setShowSlide] = useState(data[0]);
  console.log(showSlide)
  useEffect(() => {
    data.map((el) => {
      if (el.id === currentSlide) {
        console.log(el.autore)
      }
    });
  }, []);

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
      <Slider />
    </div>
  )
}

export default App