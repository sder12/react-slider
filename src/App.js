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
    <div className="App section-center">

      <h2>Our vacation</h2>

      <div className="container slider">
        <div className="review">
          {/* {
            data.map((el) => {
              return <Slide key={el.id} {...el} />
            })
          } */}
          <Slide key={showSlide.id} {...showSlide} />
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default App