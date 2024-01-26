import React from 'react';
import Footer from '~/components/Layout/components/Footer';
import Header from '~/components/Layout/components/Header';

import banner from '~/assets/images/homeBanner.png';
import './Resgister.scss'

const Resgister = () => {
    return (
        <>
            <Header></Header>
            <div className="container resBody">
                <h2 className="title">Đăng ký tài khoản</h2>
                <p className="subtitle">Tài khoản SOS để lưu lại quá trình học và tra cứu khóa học hiện tại</p>
                <div className="boxContent">
                    <div className="leftSide">
                        <img src={banner} alt="" />
                    </div>
                    <div className="rightSide">
                        <p className='label'>Đăng ký miễn phí với</p>
                        <Input placeholder="Tên của bạn"/>
                        <Input placeholder="Số điện thoại"/>
                        <Input placeholder="Tài khoản đăng nhập (Email hoặc số điện thoại)"/>
                        <Input placeholder="Mật khẩu"/>
                        <Input placeholder="Nhập lại mật khẩu"/>
                        <button type='submit' className='btnSubmit'>Đăng ký</button>
                        <div className="loginBtn">Đăng nhập</div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

const Input = (props) => {
    return (
        <input className='inputCustom' placeholder={props.placeholder}/>
    )
}

export default Resgister;
