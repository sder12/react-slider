import React from 'react'

const Slider = (props) => {

    return (
        <div className="columns is-centered is-6">
            <div className='column is-flex is-justify-content-end'>
                <button className="button is-primary" onClick={props.slideBackward} >
                    PREV
                </button>
            </div>
            <div className='column is-flex is-justify-content-start'>
                <button className="button is-primary" onClick={props.slideForward}>
                    NEXT
                </button>
            </div>
        </div>
    )
}

export default Slider