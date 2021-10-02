import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Service from '../Service'
import { Vidtramrang } from '../Vid'
import Why from '../Why'
import TR from '../../images/TR.jpg'
import Contact from '../Contact'
const Tramrang = () => {
    return (
        <>
        <Navbar>
        </Navbar>
        <Vidtramrang>
            
        </Vidtramrang>
        <img src={TR} className="img-fluid mt-2" alt="Responsive image"/>
        <Why></Why>
        <Contact></Contact>
        <Service>
        </Service>
        <Footer>
        </Footer>
        </>
    )
}

export default Tramrang
