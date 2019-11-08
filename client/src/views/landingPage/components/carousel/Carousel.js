import React from 'react';
import './carousel.scss';

import gallery from '../../../../assets/gallery-carousel-placeholder.png';

// Assets


function Carousel() {
    return (
        <section className="carousel">
            <div className="wrap">
                <h2>Gallery</h2>
                <img src={gallery} />
            </div>
        </section>
    )
}

export default Carousel;