import classNames from 'classnames/bind';
import styles from './ThucHanhDetail.module.scss';
import bacSi from '../../assets/images/bacSi-rectangle.png';
import React, { useEffect, useState } from 'react';
import { axiosPublic } from '~/api/axiosInstance';
import { SENDMAILDOCTOR } from '~/utils/apiContrants';
import jwtDecode from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const data = {
    id: 1,
    title: 'Thạc sĩ, Bác sĩ',
    name: 'Lê Trung Nghĩa',
    workplace: 'Chuyên khoa Vật lý trị liệu, Đại học Y Dược TP.HCM',
    content:
        'Bác sĩ Lê Trung Nghĩa, Thạc sĩ chuyên ngành Vật lý trị liệu tại Bệnh viện Đại học Y Dược TP.HCM, là một chuyên gia hàng đầu với kiến thức chuyên sâu và kinh nghiệm trong lĩnh vực này. Nhiệt huyết và tâm huyết của ông không chỉ thể hiện qua việc phục vụ và chăm sóc bệnh nhân mà còn thông qua sự đóng góp tích cực vào việc nâng cao chất lượng cuộc sống.<br/> <br/>Bác sĩ Nghĩa không chỉ giỏi trong Vật lý trị liệu mà còn có khả năng hỗ trợ giảng dạy kỹ năng Sơ Cấp Cứu, làm cho ông trở thành một tài năng đa năng và ấn tượng tại Đại học Y Dược TP.HCM. Sự kết hợp giữa chuyên môn sâu rộng và khả năng giáo dục xuất sắc là điểm mạnh giúp ông đóng góp tích cực vào nền y học và giáo dục y tế.',
    img: bacSi,
};

const cx = classNames.bind(styles);

function ThucHanhDetail() {
    const [showConnectButton, setShowConnectButton] = useState(true);
    const [showOptions, setShowOptions] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isConnected, setIsConnected] = useState(false);

    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));

    useEffect(() => {
        // fetch data
    }, []);

    const handleConnectClick = () => {
        setShowConnectButton(false);
        setShowOptions(true);
    };

    const formData = new FormData();
    const handleOptionClick = async () => {
        try {
            setIsLoading(true);
            const decode = loginInfo ? jwtDecode(loginInfo.accessToken) : null;
            formData.append('Email', decode.email);
            const response = await axiosPublic.post(SENDMAILDOCTOR, formData);
            setIsConnected(true);
            setShowConnectButton(false);
            setShowOptions(false);
        } catch (error) {
            console.error('Failed to send email:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleBackClick = () => {
        setShowConnectButton(true);
        setShowOptions(false);
        setIsConnected(false);
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
                    {!isConnected && (
                        <>
                            <div style={{ color: '#F23929', fontSize: '20px', fontWeight: 'bold' }}>
                                Xác nhận đăng ký với chuyên gia
                            </div>
                            <div className={cx('options')}>
                                <button className={cx('huy-btn')} onClick={handleBackClick}>
                                    Hủy
                                </button>

                                <button className={cx('confirm-btn')} onClick={handleOptionClick} disabled={isLoading}>
                                    {isLoading ? 'Đang xử lý...' : 'Xác nhận'}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
            {isConnected && (
                <div>
                    <div className={cx('detail-content')}>
                        <div>
                            <h4 className={cx('title')}>{data.title}</h4>
                            <h2 className={cx('name')}>{data.name}</h2>
                            <h4 className={cx('workplace')}>{data.workplace}</h4>
                            <div className={cx('content')} dangerouslySetInnerHTML={{ __html: data.content }} />
                        </div>
                    </div>
                    <div className={cx('options')}>
                        <button className={cx('connect-btn')}>Đã kết nối với chuyên gia</button>
                        <br></br>
                        <button className={cx('back-btn')} onClick={handleBackClick}>
                            <FontAwesomeIcon icon={faArrowLeft} /> Trở về
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ThucHanhDetail;
