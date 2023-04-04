import React from 'react'

const Slide = (slide) => {
    return (
        <section>
            <h3>{slide.autore}</h3>
            <img src="https://picsum.photos/300/300" />
            <p>{slide.recensione}</p>
            <span>vote: {slide.voto} / 5</span>
        </section >
    )
}

export default Slide