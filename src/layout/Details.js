import React from 'react'
import image1 from '../images/nhakhoapic.jpg'
import image2 from '../images/ketqua.jpg'

const Details = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-lg-2 col-md-2 col-xl-2"></div>
                <div className="col-lg-8 col-md-8 col-xl-8 p-2 bg-light">
                    <div className="row">
                        <h4>Giới thiệu nha khoa N&Q</h4>
                    </div>
                    <div className="row m-3">
                        <div className='col-6'>
                            <img src={image1} class="d-block w-100" alt="Responsive image" />
                        </div>
                        <div className='col-6 p-3'>
                            <h4>Nha Khoa N&Q</h4>
                            <ul style={{ fontSize: '18px' }}>
                                <li><p>Cơ sở vật chất hiện đại, khang trang</p></li>
                                <li><p>Trang thiết bị máy móc bậc nhất</p></li>
                                <li><p>Đội ngũ bác sĩ chuyên môn, giàu kinh nghiệm</p></li>
                                <li><p>Đa dạng các dịch vụ đa khoa chuyên nghiệp</p></li>
                                <li><p>...</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-xl-2"></div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-2 col-md-2 col-xl-2"></div>
                <div className="col-lg-8 col-md-8 col-xl-8 p-2 bg-light">
                    <div className="row">
                        <h4>Kết quả đạt được :</h4>
                    </div>
                    <div className="row m-3">
                        <div className='col-6 p-3'>
                            <ul class="list-group list-group-horizontal text-center" >
                                <li class="list-group-item" style={{ width: '45%', height: '100px', border: 'none' }}>
                                    <h2 style={{ color: '#c72a47' }}>99%</h2>
                                    <p style={{ fontSize: '15px' }}>khách hàng hài lòng</p>
                                </li>
                                <li class="list-group-item" style={{ width: '45%', height: '100px', border: 'none' }}>
                                    <h2 style={{ color: '#c72a47' }}>1000+</h2>
                                    <p style={{ fontSize: '15px' }}>khách hàng/năm</p>
                                </li>
                            </ul>
                            <ul class="list-group list-group-horizontal text-center">
                                <li class="list-group-item" style={{ width: '45%', height: '100px', border: 'none' }}>
                                    <h2 style={{ color: '#c72a47' }}>100+</h2>
                                    <p style={{ fontSize: '15px' }}>Bác sĩ giỏi</p>
                                </li>
                                <li class="list-group-item" style={{ width: '45%', height: '100px', border: 'none' }}>
                                    <h2 style={{ color: '#c72a47' }}>10</h2>
                                    <p style={{ fontSize: '15px' }}>Năm kinh nghiệm</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <img src={image2} class="d-block w-100" alt="Responsive image" />
                        </div>

                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-xl-2"></div>
            </div>
        </div >
    )
}

export default Details
