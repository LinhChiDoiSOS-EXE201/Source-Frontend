import noti from '~/assets/images/noti.svg';
import setting from '~/assets/images/setting.svg';
import './Profile.scss';
import { useEffect, useState } from 'react';
import { axiosPrivate } from '~/api/axiosInstance';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
import { USERDETAIL } from '~/utils/apiContrants';
import jwtDecode from 'jwt-decode';
import images from '~/assets/images';

function Profile() {
    const [user, setUser] = useState({});
    const [customer, setCustomer] = useState({});
    // const [isPaid, setIsPaid] = useState(false);
    //Test
    const [isPaid, setIsPaid] = useState(true);
    //Test
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
    const decode = jwtDecode(loginInfo.accessToken);
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = () => {
        setIsLoading(true);
    };

    useEffect(() => {
        if (isLoading) {
            // After 2 seconds, navigate and stop the loading animation
            setTimeout(() => {
                navigate(config.routes.payment);
                setIsLoading(false);
            }, 500);
        }
    }, [isLoading, navigate]);

    useEffect(() => {
        const getUser = async () => {
            if (loginInfo !== null) {
                const param = { id: decode.Id };
                const id = decode.Id;
                try {
                    const response = await axiosPrivate.get(`${USERDETAIL}/${id}`);
                    setUser(response.data.customerData);
                    setCustomer(response.data.applicationUserData);
                    setIsPaid(response.data.customerData.isPaid);
                } catch (e) {
                    console.error(`Error at getUser:`);
                }
            } else {
                toast.error('not allow');
                navigate(config.routes.home);
            }
        };
        getUser();
    }, [loginInfo, decode.Id, navigate]);

    const handleLogout = () => {
        localStorage.removeItem('loginInfo');
        navigate(config.routes.login);
    };

    return (
        <div className="container">
            <div className="infoBlock">
                <div className="leftSide">
                    <div className="blockAvt">
                        <img src={customer.image} alt="" />
                    </div>
                    <div className="blockName">
                        <p className="name">{customer.userName}</p>
                        <p className="desc">Đã tự bảo vệ bản thân được 101 ngày</p>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="notification">
                        <img src={noti} alt="" />
                        <p>Nhắc nhở</p>
                    </div>
                    <div className="settings">
                        <img src={setting} alt="" />
                        <p>Cài đặt tài khoản</p>
                    </div>
                    <div className="btn-logout" onClick={handleLogout}>
                        <img src={images.logout} alt="Logout" />
                        <p>Đăng xuất</p>
                    </div>
                </div>
            </div>
            <div className="overviewBlock">
                <div className="leftSide">
                    <div className="statusBlock">
                        <div className="status red">
                            <p className="title">Tiếp tục học</p>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="27"
                                    viewBox="0 0 25 27"
                                    fill="none"
                                >
                                    <path
                                        d="M12.2933 25.6675C18.8341 25.6675 24.0798 20.0047 24.0798 13.0915C24.0798 6.17838 18.8341 0.515526 12.2933 0.515526C5.75252 0.515526 0.506836 6.17838 0.506836 13.0915C0.506836 20.0047 5.75252 25.6675 12.2933 25.6675Z"
                                        fill="#F23929"
                                        fillOpacity="0.5"
                                        stroke="#FF0000"
                                    />
                                    <ellipse cx="12.2924" cy="13.0916" rx="7.36075" ry="7.87566" fill="#F23929" />
                                </svg>
                                <p>thắt nút dây</p>
                            </div>
                        </div>
                        <div className="status">
                            <p className="title">Ôn tập</p>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="27"
                                    viewBox="0 0 25 27"
                                    fill="none"
                                >
                                    <g opacity="0.7">
                                        <path
                                            d="M12.3773 25.6675C18.9181 25.6675 24.1638 20.0047 24.1638 13.0915C24.1638 6.17838 18.9181 0.515526 12.3773 0.515526C5.8365 0.515526 0.59082 6.17838 0.59082 13.0915C0.59082 20.0047 5.8365 25.6675 12.3773 25.6675Z"
                                            fill="#0EB5C8"
                                            fillOpacity="0.5"
                                            stroke="#0EB5C8"
                                        />
                                        <ellipse cx="12.3774" cy="13.0914" rx="7.36075" ry="7.87566" fill="#0EB5C8" />
                                    </g>
                                </svg>
                                <p>Tín hiệu cầu cứu</p>
                            </div>
                        </div>
                    </div>
                    {/* {isPaid ? (
                        Test */}
                    {!isPaid ? (
                        <div className="learningCourse">
                            <div className="container-updatepremium">
                                <button className="updatePremium" onClick={handleButtonClick}>
                                    <div>
                                        <img alt="premium" src={images.premium} />
                                        <p>Nâng cấp Premium</p>
                                    </div>
                                </button>
                                {isLoading && <div className="loading">Loading...</div>}
                                <img
                                    className="logowithContentInside"
                                    alt="logowithContentInside"
                                    src={images.logowithContentInside}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="learningCourse">
                            <div className="container-updatepremium">
                                <button className="updatePremium" onClick={handleButtonClick}>
                                    <div>
                                        <img alt="premium" src={images.premium} />
                                        <p>Nâng cấp Premium</p>
                                    </div>
                                </button>
                                {isLoading && <div className="loading">Loading...</div>}
                                <img
                                    className="logowithContentInside"
                                    alt="logowithContentInside"
                                    src={images.logowithContentInside}
                                />
                            </div>
                        </div>
                        // <div className="learningCourse">
                        //     <p className="title">Khóa học đang theo học</p>
                        //     <div className="courses">
                        //         <div className="course">
                        //             <img src={avtTemp1} alt="" />
                        //         </div>
                        //         <div className="course">
                        //             <img src={avtTemp2} alt="" />
                        //         </div>
                        //     </div>
                        // </div>
                    )}
                </div>
                <div className="rightSide">
                    {/* {isPaid ? (
                        Test */}
                    {!isPaid ? (
                        <div className="container-right-updatepremium">
                            <p className="only10K">
                                Chỉ với 10k/tháng, bạn đã có thể mở tài khoản Premium và khám phá tất cả tính năng của
                                Khẩn Cấp SOS
                            </p>
                            <img alt="premium" src={images.loiichkhinangcap} />
                            <img alt="premium" src={images.loiich} />
                        </div>
                    ) : (
                        // <img src={tableTemp} alt="" />
                        <div className="container-right-updatepremium">
                            <p className="only10K">
                                Chỉ với 10k/tháng, bạn đã có thể mở tài khoản Premium và khám phá tất cả tính năng của
                                Khẩn Cấp SOS
                            </p>
                            <img alt="premium" src={images.loiichkhinangcap} />
                            <img alt="premium" src={images.loiich} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;
