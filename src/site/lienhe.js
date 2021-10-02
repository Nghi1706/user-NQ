import React from 'react'
import Navbar from '../layout/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import image1 from '../images/lienhe-banner.png'
import Footer from '../layout/Footer'
import Contact from '../layout/Contact'
function lienhe() {
    return (
        <>
            <Navbar>
            </Navbar>
            <img src={image1} class="d-block w-100" alt="Responsive image" />
            <Contact>

            </Contact>
            <Footer>
            </Footer>
        </>
    )
}

export default lienhe
