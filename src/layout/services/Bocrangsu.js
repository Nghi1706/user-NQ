import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Service from '../Service'
import { Vidbocrangsu } from '../Vid'
import Why from '../Why'
import BRS from '../../images/BRS.jpg'
import Contact from '../Contact'
const Bocrangsu = () => {
    return (
        <>
        <Navbar>
        </Navbar>
        <Vidbocrangsu>
        </Vidbocrangsu>
        <img src={BRS} className="img-fluid mt-2" alt="Responsive image"/>
        <Why></Why>
        <Contact></Contact>
        <Service>
        </Service>
        <Footer>
        </Footer>
        </>
    )
}

export default Bocrangsu
