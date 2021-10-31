import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Service from '../Service'
import { Vidnhorang } from '../Vid'
import Why from '../Why'
import NR from '../../images/NR.jpg'
import Contact from '../Contact'
const Nhorang = () => {
    return (
        <>
            <Navbar>
            </Navbar>
            <Service>
            </Service>
            <Vidnhorang>
            </Vidnhorang>
            <img src={NR} className="img-fluid mt-2" alt="Responsive image" />
            <Why></Why>
            <Contact></Contact>

            <Footer>
            </Footer>
        </>
    )
}

export default Nhorang
