import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Slider1 from '../images/slider1.jpg'
import Slider2 from '../images/slider2.jpg'
import Slider3 from '../images/slider3.jpg'
import Slider4 from '../images/slider4.jpg'
const Slider = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={Slider1} className="d-block w-100" alt="Slider1"/>
            </div>
            <div className="carousel-item">
            <img src={Slider2} className="d-block w-100" alt="Slider2"/>
            </div>
            <div className="carousel-item">
            <img src={Slider3} className="d-block w-100" alt="Slider3"/>
            </div>
            <div className="carousel-item">
            <img src={Slider4} className="d-block w-100" alt="Slider4"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    )
}

export default Slider
