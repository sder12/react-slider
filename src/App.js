import React from 'react';
import Slide from './components/Slide';
import data from './data';

const App = () => {
  return (
    <div className="App section-center">
      <h2>Our vacation</h2>
      <Slide />

      {
        data.map((el) => {
          return <Slide key={el.id} {...el} />
        })
      }
    </div>
  )
}

export default App