import React from 'react'

const Slider = () => {

    return (
        <div className="columns is-centered is-6">
            <div className='column is-flex is-justify-content-end'>
                <button className="button is-primary" >
                    PREV
                </button>
            </div>
            <div className='column is-flex is-justify-content-start'>
                <button className="button is-primary">
                    NEXT
                </button>
            </div>
        </div>
    )
}

export default Slider