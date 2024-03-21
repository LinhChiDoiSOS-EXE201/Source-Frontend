import classNames from 'classnames/bind';
import styles from './HocKyNangDetail.module.scss';
import { useParams } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
import React, { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function KyNangDetail() {
    const [data1, setData1] = useState([]);
    const navigate = useNavigate();

    const { id } = useParams(); // Lấy tất cả các tham số từ URL
    console.log('Course ID: ', id);

    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
    const decode = loginInfo ? jwtDecode(loginInfo.accessToken) : null;
    const applicationUserId = decode.Id;
    console.log(applicationUserId);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://api-6969.ministore.tech/api/v1/course-detail/${id}/${applicationUserId}`,
            );
            if (response.status !== 200) {
                navigate(config.routes.profile);
            }
            const jsonData = await response.json();

            console.log(jsonData.content);
            setData1(jsonData);
        };

        fetchData();
    }, []);
    return <div className={cx('container')} dangerouslySetInnerHTML={{ __html: data1.content }} />;
}
export default KyNangDetail;
