import React from 'react';
import one from '../Shared/Images/one.png';
import two from '../Shared/Images/veg.jpg'
import three from '../Shared/Images/chicken.jpg'
import four from '../Shared/Images/mutton.jpg'


export const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel shd slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={three} className="d-block image w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={two} className="d-block image w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={three} className="d-block image w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}