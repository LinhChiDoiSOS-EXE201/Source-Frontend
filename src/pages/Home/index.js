import check from '~/assets/images/check.svg';
import banner from '~/assets/images/logo.svg';
import './Home.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

function Home() {
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
    const decode = loginInfo ? jwtDecode(loginInfo.accessToken) : null;
    return (
        <div className="container">
            <div className="boxContent">
                <div className="lefSide">
                    <p className="title">
                        <span className="bold">LỢI ÍCH KHI TẠO</span> TÀI KHOẢN SOS
                    </p>
                    <div className="listBox">
                        <div className="item">
                            <div className="icon">
                                <img src={check} alt="" />
                            </div>
                            <p className="desc">Lưu lại quá trình học các kỹ năng sinh tồn</p>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <img src={check} alt="" />
                            </div>
                            <p className="desc">
                                Dễ dàng tra cứu lịch sử tìm kiếm chẩn đoán để theo dõi sức khỏe cá nhân
                            </p>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <img src={check} alt="" />
                            </div>
                            <p className="desc">Kết nối nhanh chóng với các chuyên gia và các khóa học nâng cao</p>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <img src={check} alt="" />
                            </div>
                            <p className="desc">Cá nhân hóa không gian học tập</p>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <img src={check} alt="" />
                            </div>
                            <p className="desc">Tự động cài đặt nhắc nhở học tập</p>
                        </div>
                    </div>
                    <div className="buttonGroup">
                        {decode === null || decode === undefined ? (
                            <>
                                <Link to={config.routes.register} className="btn">
                                    Đăng ký miễn phí
                                </Link>
                                <Link to={config.routes.login} className="btn blue">
                                    Đăng nhập
                                </Link>
                            </>
                        ) : null}
                    </div>
                </div>
                <div className="rightSide">
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;
