import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Service from '../Service'
import { Vidtaytrangrang } from '../Vid'
import Why from '../Why'
import TTR from '../../images/TTR.jpg'
import Contact from '../Contact'
const Taytrangrang = () => {
    return (
        <>
        <Navbar>
        </Navbar>
        <Vidtaytrangrang></Vidtaytrangrang>
        <img src={TTR} className="img-fluid mt-2" alt="Responsive image"/>
        <Why></Why>
        <Contact></Contact>
        <Service>
        </Service>
        <Footer>
        </Footer>
        </>
    )
}

export default Taytrangrang
