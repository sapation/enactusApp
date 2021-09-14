import React from 'react';
import "../Carousel/Carousel.css";
import Image1 from '../../assets/images/bg-1.jpeg'
import Image2 from '../../assets/images/enactus4.jpg'
import Image3 from '../../assets/images/enactus1.jpg'

const Carousel = () => {
    return (
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                    <div className="col-md-8 col-lg-8 col-sm-12 imgContainer">
                        <img src={Image1} class="" alt="..."></img>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 infoContainer">
                        <h1>Enactus Ghana Champions.</h1>
                        <p><q>Make a difference in your community</q></p>
                        <button className="btn btn-warning col-4">Join Us Today</button>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                    <div className="col-md-8 col-lg-8 col-sm-12 imgContainer">
                    <img src={Image2} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 infoContainer">
                        <h1>Creating Business.</h1>
                        <p><q>Transforming Lives.</q></p>
                        <button className="btn btn-warning col-4">Join Us Today</button>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                    <div className="col-md-8 col-lg-8 col-sm-12 imgContainer">
                    <img src={Image3} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 infoContainer">
                        <h1>We are here to change the world.</h1>
                        <p><q>Join us to a Make a difference</q></p>
                        <button className="btn btn-warning col-4">Join Us Today</button>
                    </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel
