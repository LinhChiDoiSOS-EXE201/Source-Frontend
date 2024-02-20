import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Payment.module.scss';
import images from '~/assets/images';
import { axiosPublic } from '~/api/axiosInstance';
import React, { useState } from 'react';
import { PAYMENTSENDMAIL } from '~/utils/apiContrants';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const cx = classNames.bind(styles);
function Payment() {
    const [isLoading, setIsLoading] = useState(false);
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
    //    const decode = loginInfo ? jwtDecode(loginInfo.accessToken) : null;

    const navigate = useNavigate();
    const FormData = require('form-data'); // Assuming you've installed 'form-data'

    const formData = new FormData();

    const handleButtonClick = async () => {
        setIsLoading(true);

        try {
            console.log(loginInfo);
            const decode = loginInfo ? jwtDecode(loginInfo.accessToken) : null;
            console.log(decode);
            formData.append('Email', decode.email);
            const response = await axiosPublic.post(PAYMENTSENDMAIL, formData);
            navigate(config.routes.payment);
        } catch (error) {
            console.error('Failed to send email:', error);
        }

        setIsLoading(false);
    };
    return (
        <div className={cx('container')}>
            <div className={cx('infoBlock')}>
                <div className={cx('leftSide')}>
                    <div className={cx('blockName')}>THÔNG TIN THANH TOÁN</div>
                    <div className={cx('blockName-1')}>Tổng số tiền: 120.000 VNĐ/năm</div>
                    <div className={cx('blockName-rectangle')}>
                        <div className={cx('blockName-2')}>
                            Ngân hàng: BVBank <br />
                            STK: 99MM23305M53738285 <br />
                            TÊN TÀI KHOẢN: LUU VU YEN NHI <br />
                            hoặc <br />
                            Momo: 0386375389 (LUU VU YEN NHI)
                        </div>
                    </div>
                    <div className={cx('blockName-3')}>CÚ PHÁP</div>
                    <div className={cx('blockName-premium')}>
                        <div className={cx('blockName-4')}>SĐT SOS PREMIUM</div>
                        <div className={cx('blockName-5')}>VD: 0386375389 SOS PREMIUM</div>
                    </div>
                </div>
                <div className={cx('rightSide')}>
                    <div>QUÉT QR NHANH CHÓNG</div>
                    <img src={images.payment} alt=""></img>
                    <button className={cx('blockName-button-payment')} onClick={handleButtonClick}>
                        <div className={cx('blockName-6')}>HOÀN TẤT THANH TOÁN</div>
                    </button>
                    {isLoading && <div className="loading">Loading...</div>}
                </div>
            </div>
        </div>
    );
}

export default Payment;
