import React from 'react';
import './carousel.scss';
import Slider from "react-slick";

import gallery from '../../../../assets/gallery-carousel-placeholder.png';

// Assets


function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="carousel">
            <div className="wrap">
                <h2>Gallery</h2>
                <img src={gallery} />
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Carousel;