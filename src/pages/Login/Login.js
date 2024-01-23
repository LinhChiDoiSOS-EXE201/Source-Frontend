import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('login')}>
            <div className={cx('logincontent')}>
                Tài khoản SOS để lưu lại quá trình học và tra cứu khóa học hiện tại
            </div>
            <div className={cx('loginTittle')}>ĐĂNG NHẬP TÀI KHOẢN</div>
            <div className={cx('main-login-contain')}>
                <div className={cx('main-login-contain-container')}>
                    <div className={cx('main-login-contain-container-button')}>
                        <button className={cx('main-login-contain-container-inner-button')}>Đăng nhập</button>
                    </div>
                    <div className={cx('input-container')}>
                        <input className={cx('input-field')} defaultValue="Email hoặc số điện thoại"></input>
                    </div>
                    <div className={cx('input-container1')}>
                        <input className={cx('input-field')} defaultValue="Mật khẩu"></input>
                    </div>
                    <div className={cx('forgot-password')}>Quên mật khẩu?</div>
                    <div className={cx('or-login-text')}>Hoặc đăng nhập miễn phí với</div>
                    <div className={cx('help-center')}>Trung tâm trợ giúp</div>
                    <div style={{ width: 385.19, height: 14.12, left: 39.33, top: 395.27, position: 'absolute' }}>
                        <div
                            style={{
                                width: 163.35,
                                height: 14.12,
                                left: 221.84,
                                top: 0,
                                position: 'absolute',
                                color: '#FF3D00',
                                fontSize: 24,
                                fontFamily: 'Darker Grotesque',
                                fontWeight: '900',
                                wordWrap: 'break-word',
                            }}
                        >
                            Đăng ký miễn phí
                        </div>
                        <div
                            style={{
                                width: 215.79,
                                height: 14.12,
                                left: 0,
                                top: 0,
                                position: 'absolute',
                                textAlign: 'right',
                                color: '#025B67',
                                fontSize: 24,
                                fontFamily: 'Darker Grotesque',
                                fontWeight: '700',
                                wordWrap: 'break-word',
                            }}
                        >
                            Bạn chưa có tài khoản?
                        </div>
                    </div>
                    <div style={{ width: 332.76, height: 50.42, left: 65.54, top: 317.63, position: 'absolute' }}>
                        <div style={{ width: 141.17, height: 50.42, left: 191.59, top: 0, position: 'absolute' }}>
                            <div
                                style={{
                                    width: 141.17,
                                    height: 50.42,
                                    left: 0,
                                    top: 0,
                                    position: 'absolute',
                                    background: 'rgba(14, 181, 200, 0)',
                                    borderRadius: 10,
                                    border: '2px #025B67 solid',
                                }}
                            />
                            <div
                                style={{
                                    width: 75.63,
                                    height: 11.09,
                                    left: 51.43,
                                    top: 20.17,
                                    position: 'absolute',
                                    color: '#025B67',
                                    fontSize: 20,
                                    fontFamily: 'Darker Grotesque',
                                    fontWeight: '700',
                                    wordWrap: 'break-word',
                                }}
                            >
                                Facebook
                            </div>
                            <div
                                style={{
                                    width: 25.21,
                                    height: 25.21,
                                    left: 14.12,
                                    top: 12.1,
                                    position: 'absolute',
                                    background: '#025B67',
                                }}
                            ></div>
                        </div>
                        <div style={{ width: 141.17, height: 50.42, left: 0, top: 0, position: 'absolute' }}>
                            <div
                                style={{
                                    width: 141.17,
                                    height: 50.42,
                                    left: 0,
                                    top: 0,
                                    position: 'absolute',
                                    background: 'rgba(14, 181, 200, 0)',
                                    borderRadius: 10,
                                    border: '2px #025B67 solid',
                                }}
                            />
                            <div
                                style={{
                                    width: 54.45,
                                    height: 11.09,
                                    left: 58.48,
                                    top: 20.17,
                                    position: 'absolute',
                                    color: '#025B67',
                                    fontSize: 20,
                                    fontFamily: 'Darker Grotesque',
                                    fontWeight: '700',
                                    wordWrap: 'break-word',
                                }}
                            >
                                Google
                            </div>
                            <div
                                style={{
                                    width: 24.71,
                                    height: 25.21,
                                    left: 19.16,
                                    top: 12.1,
                                    position: 'absolute',
                                    background: '#025B67',
                                }}
                            ></div>
                        </div>
                    </div>
                </div>

                <div className={cx('image-content')}>
                    <img src={images.logo} />
                    <div
                        style={{
                            width: 456.42,
                            height: 33.57,
                            left: 44.81,
                            top: 265.43,
                            position: 'absolute',
                            textAlign: 'center',
                            color: 'black',
                            fontSize: 28,
                            fontFamily: 'Darker Grotesque',
                            fontWeight: '700',
                            wordWrap: 'break-word',
                        }}
                    >
                        Sẵn sàng ứng phó, tự cứu chính mình
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
