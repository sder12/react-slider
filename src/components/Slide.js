import React from 'react'

const Slide = (slide) => {
    return (
        <section className="card">
            {/* Image */}
            <div className="card-image">
                <figure class="image is-4by3">
                    <img src="https://picsum.photos/300/300" alt="Placeholder image" />
                </figure>
            </div>

            {/* Content */}
            <div className="card-content">
                {/* Author */}
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src="https://i.pinimg.com/564x/56/79/0d/56790d50e7c7a286d57fde5637a346b7.jpg"></img>
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
                    <span> vote {slide.voto} / 5</span>
                    <br />
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
        </section>
    )
}

export default Slide