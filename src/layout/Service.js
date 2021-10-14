import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { Link } from 'react-router-dom';
import dv1 from '../images/dichvu1.png'
import dv2 from '../images/dichvu2.png'
import dv3 from '../images/dichvu3.png'
import dv4 from '../images/dichvu4.png'
import dv5 from '../images/dichvu5.png'
import dv6 from '../images/dichvu6.png'
const Service = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-lg-2 col-md-2 col-xl-2"></div>
                <div className="col-lg-8 col-md-8 col-xl-8">
                    <div className="row">
                        <h4>Dịch vụ của chúng tôi :</h4>
                    </div>
                    <div className="row text-center   bg-light">
                        <div className="col-lg-4 col-md-4 col-xl-4">
                            <Link to="/dichvu/nhorang">
                                <figure class="figure">
                                    <img src={dv1} class="figure-img img-fluid rounded" alt="nho_rang" />
                                    <figcaption class="figure-caption">Nhổ răng</figcaption>
                                </figure>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4">
                            <Link to="/dichvu/bocrangsu">
                                <figure class="figure">
                                    <img src={dv2} class="figure-img img-fluid rounded" alt="boc_rang" />
                                    <figcaption class="figure-caption">Bọc răng sứ</figcaption>
                                </figure>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4">
                            <Link to="/dichvu/niengrang">
                                <figure class="figure">
                                    <img src={dv3} class="figure-img img-fluid rounded" alt="nieng_rang" />
                                    <figcaption class="figure-caption">Niềng răng</figcaption>
                                </figure>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4">
                            <Link to="/dichvu/tramrang">
                                <figure class="figure">
                                    <img src={dv4} class="figure-img img-fluid rounded" alt="tram_rang" />
                                    <figcaption class="figure-caption">Trám răng</figcaption>
                                </figure>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4">
                            <Link to="/dichvu/taytrangrang">
                                <figure class="figure">
                                    <img src={dv5} class="figure-img img-fluid rounded" alt="tay_rang" />
                                    <figcaption class="figure-caption">Tẩy trắng răng</figcaption>
                                </figure>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4">
                            <Link to="/dichvu/caovoirang">
                                <figure class="figure">
                                    <img src={dv6} class="figure-img img-fluid rounded" alt="cao_rang" />
                                    <figcaption class="figure-caption">Cạo vôi răng</figcaption>
                                </figure>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-xl-2"></div>
            </div>
        </div>
    )
}

export default Service
