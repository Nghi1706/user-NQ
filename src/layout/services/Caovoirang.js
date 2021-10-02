import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Service from '../Service'
import { Vidcaovoirang } from '../Vid'
import Why from '../Why'
import CVR from '../../images/CVR.jpg'
import Contact from '../Contact'
const Caovoirang = () => {
    return (
        <>
        <Navbar>
        </Navbar>
        <Vidcaovoirang>
        </Vidcaovoirang>
        <img src={CVR} className="img-fluid mt-2" alt="Responsive image"/>
        <Why></Why>
        <Contact></Contact>
        <Service>
        </Service>
        <Footer>
        </Footer>
        </>
    )
}

export default Caovoirang
