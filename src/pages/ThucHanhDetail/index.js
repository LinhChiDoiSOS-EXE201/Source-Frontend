import classNames from 'classnames/bind';
import styles from './ThucHanhDetail.module.scss';
import bacSi from '../../assets/images/bacSi-rectangle.png';
import React, { useEffect } from 'react';

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
    useEffect(() => {
        //fetch data
    }, []);

    return (
        <div className={cx('thucHanhDetail')}>
            <div className={cx('detail-img')}>
                <img src={data.img} alt="bacSi" />
            </div>
            <div className={cx('detail-content')}>
                <h4 className={cx('title')}>{data.title}</h4>
                <h2 className={cx('name')}>{data.name}</h2>
                <h4 className={cx('workplace')}>{data.workplace}</h4>
                <div className={cx('content')} dangerouslySetInnerHTML={{ __html: data.content }} />
                <a className={cx('contact-btn')} href="#a">
                    Kết nối ngay với chuyên gia
                </a>
            </div>
        </div>
    );
}

export default ThucHanhDetail;
