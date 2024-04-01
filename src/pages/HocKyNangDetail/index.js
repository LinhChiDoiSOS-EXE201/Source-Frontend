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

    //let loginInfo = null;
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
    async function checklogin() {
        console.log('calling');

        console.log('loginInfo sau khi await', loginInfo);

        if (loginInfo === null) {
            navigate('/');
            window.stop();
        }
        // Expected output: "resolved"
    }

    checklogin();
    console.log('5s');
    //const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
    //console.log('login info ne', loginInfo)

    let decode = null;
    if (loginInfo !== null) {
        decode = loginInfo ? jwtDecode(loginInfo.accessToken) : null;
    }

    console.log('decode ne:', decode);
    let applicationUserId = 'BF835A7D-D002-4C9F-8BD6-0E2D321447C4';
    if (decode === null) {
        navigate('/');
    } else {
        applicationUserId = decode.Id;
    }

    console.log(applicationUserId);

    useEffect(() => {
        const fetchData = async () => {
            console.log('loginInfo ne', loginInfo);

            if (loginInfo === null) {
                navigate('/');
            } else {
                const response = await fetch(
                    `https://khoa.ministore.tech/api/v1/course-detail/${id}/${applicationUserId}`,
                );
                if (response.status !== 200) {
                    navigate(config.routes.home);
                }
                const jsonData = await response.json();

                console.log(jsonData.content);
                setData1(jsonData);
            }
        };

        fetchData();
    }, []);
    return <div className={cx('container')} dangerouslySetInnerHTML={{ __html: data1.content }} />;
}
export default KyNangDetail;
