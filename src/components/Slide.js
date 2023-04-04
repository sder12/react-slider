import React from 'react'

const Slide = (slide) => {
    return (
        <section className="card">
            {/* Image */}
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src="https://picsum.photos/300/300" alt="Placeholder image" />
                </figure>
            </div>

            {/* Content */}
            <div className="card-content">
                {/* Author */}
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={slide.avatar} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{slide.autore}</p>
                        <p className="subtitle is-6">@{slide.autore}</p>
                    </div>
                </div>
                {/* Description */}
                <div className="content">
                    {slide.recensione}
                    <a href="#">#bulma</a> <a href="#">#slider</a>
                    <br />
                    <div className="mt-4">
                        {[...Array(slide.voto)].map((star) => {
                            return (
                                <i className="fa-solid fa-star" />
                            );
                        })}
                        {[...Array((5 - slide.voto))].map((star) => {
                            return (
                                <i className="fa-regular fa-star" />
                            );
                        })}
                    </div>
                    <br />
                    <div>11:09 PM - 1 Jan 2016</div>
                </div>
            </div>
        </section >
    )
}

export default Slide