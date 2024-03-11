import classNames from 'classnames/bind';
import styles from './ThucHanhDetail.module.scss';
import bacSi from '../../assets/images/bacSi-rectangle.png';
import React, { useEffect, useState } from 'react';

const data = {
    id: 1,
    title: 'Thạc sĩ, Bác sĩ',
    name: 'Lê Trung Nghĩa',
    workplace: 'Chuyên khoa Vật lý trị liệu, Đại học Y Dược TP.HCM',
    content:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <br/> <br/> irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut   cillum dolore eu fugiat nulla pariatur.',
    img: bacSi,
};

const cx = classNames.bind(styles);

function ThucHanhDetail() {
    const [showConnectButton, setShowConnectButton] = useState(true);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        //fetch data
    }, []);

    const handleConnectClick = () => {
        setShowConnectButton(false);
        setShowOptions(true);
    };

    const handleOptionClick = () => {
        setShowConnectButton(true);
        setShowOptions(false);
    };

    const handleBackClick = () => {
        setShowConnectButton(true);
        setShowOptions(false);
    };

    return (
        <div className={cx('thucHanhDetail')}>
            <div className={cx('detail-img')}>
                <img src={data.img} alt="bacSi" />
            </div>
            {showConnectButton && (
                <div className={cx('detail-content')}>
                    <h4 className={cx('title')}>{data.title}</h4>
                    <h2 className={cx('name')}>{data.name}</h2>
                    <h4 className={cx('workplace')}>{data.workplace}</h4>
                    <div className={cx('content')} dangerouslySetInnerHTML={{ __html: data.content }} />

                    <a className={cx('contact-btn')} href="#a" onClick={handleConnectClick}>
                        Kết nối ngay với chuyên gia
                    </a>
                </div>
            )}
            {showOptions && (
                <div>
                    <div className={cx('detail-content')}>
                        <div>
                            <h4 className={cx('title')}>{data.title}</h4>
                            <h2 className={cx('name')}>{data.name}</h2>
                            <h4 className={cx('workplace')}>{data.workplace}</h4>
                            <div className={cx('content')} dangerouslySetInnerHTML={{ __html: data.content }} />
                        </div>
                    </div>
                    <div style={{ color: '#F23929', fontSize: '20px', fontWeight: 'bold' }}>
                        Xác nhận đăng ký với chuyên gia
                    </div>
                    <div className={cx('options')}>
                        <button className={cx('huy-btn')} onClick={handleOptionClick}>
                            Hủy
                        </button>
                        <button className={cx('confirm-btn')} onClick={handleOptionClick}>
                            Xác nhận
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ThucHanhDetail;
