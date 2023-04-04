import React from 'react'

const Slide = (slide) => {
    return (
        <section>
            {slide.autore}
            <p>{slide.recensione}</p>
            <span>vote: {slide.voto} / 5</span>
        </section>
    )
}

export default Slide