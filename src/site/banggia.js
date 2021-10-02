import React from 'react'
import Navbar from '../layout/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import image1 from '../images/bang-gia.png'
import Footer from '../layout/Footer'
import Costs from '../layout/costs'
function banggia() {
    return (
        <>
        <Navbar>
        </Navbar>
        <img src={image1} class="d-block w-100" alt="Responsive image" />
        <Costs></Costs>
        <Footer>
        </Footer>
        </>
    )
}

export default banggia
