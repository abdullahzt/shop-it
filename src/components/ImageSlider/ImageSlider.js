import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './ImageSlider.css'

const ImageSlider = props => {

    return (
        <Carousel infiniteLoop autoPlay showArrows showThumbs={false}>
            <div>
                <img src="https://images.unsplash.com/photo-1516820827855-3ea1bd6f79ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1061&q=80" alt=""/>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1536584754829-12214d404f32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
            </div>
        </Carousel>
    )

}

export default ImageSlider;