import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Service from '../Service'
import { Vidniengrang } from '../Vid'
import Why from '../Why'
import NiR from '../../images/NiR.jpg'
import Contact from '../Contact'
const Niengrang = () => {
    return (
        <>
            <Navbar>
            </Navbar>
            <Service>
            </Service>
            <Vidniengrang>

            </Vidniengrang>
            <img src={NiR} className="img-fluid mt-2" alt="Responsive image" />
            <Why></Why>
            <Contact></Contact>

            <Footer>
            </Footer>
        </>
    )
}

export default Niengrang
