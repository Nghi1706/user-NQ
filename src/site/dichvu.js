import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../layout/Navbar'
import image1 from '../images/dich-vu.png'
import Footer from '../layout/Footer'
import Service from '../layout/Service'
function Dichvu() {
    return (
        <>
        <Navbar>
        </Navbar>
        <img src={image1} class="d-block w-100" alt="Responsive image" />
        <Service>
        </Service>
        <Footer>
        </Footer>
        </>
    )
}

export default Dichvu
