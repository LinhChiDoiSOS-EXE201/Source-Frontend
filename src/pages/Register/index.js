import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);
function Register() {
    return (
        <div className={cx('NG-k')}>
            <div className={cx('div-2')}>
                <p className={cx('text-wrapper-11')}>
                    Tài khoản SOS để lưu lại quá trình học và tra cứu khóa học hiện tại
                </p>
                <div className={cx('text-wrapper-12')}>ĐĂNG KÝ TÀI KHOẢN</div>
                <div className={cx('group-3')}>
                    <div className={cx('group-4')}>
                        <div className={cx('overlap-group-wrapper')}>
                            <div className={cx('div-wrapper')}>
                                <div className={cx('text-wrapper-13')}>Đăng ký</div>
                            </div>
                        </div>
                        <div className={cx('group-5')}>
                            <div className={cx('group-6')}>
                                <div className={cx('overlap-group-2')}>
                                    <div className={cx('text-wrapper-14')}>Tên của bạn</div>
                                </div>
                            </div>
                            <div className={cx('overlap-wrapper')}>
                                <div className={cx('overlap')}>
                                    <div className={cx('text-wrapper-15')}>Số điện thoại</div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('group-7')}>
                            <div className={cx('overlap-2')}>
                                <p className={cx('text-wrapper-16')}>Tài khoản đăng nhập (Email hoặc số điện thoại)</p>
                            </div>
                        </div>
                        <div className={cx('group-8')}>
                            <div className={cx('overlap-2')}>
                                <div className={cx('text-wrapper-17')}>Mật khẩu</div>
                            </div>
                        </div>
                        <div className={cx('group-9')}>
                            <div className={cx('overlap-2')}>
                                <div className={cx('text-wrapper-17')}>Nhập lại mật khẩu</div>
                            </div>
                        </div>
                        <p className={cx('text-wrapper-18')}>Đăng ký miễn phí với</p>
                        <div className={cx('text-wrapper-19')}>Hoặc</div>
                        <Link to={config.routes.login} className={cx('text-wrapper-20')}>
                            Đăng nhập
                        </Link>
                        <div className={cx('group-10')}>
                            <div className={cx('group-11')}>
                                <div className={cx('overlap-group-3')}>
                                    <div className={cx('text-wrapper-21')}>Facebook</div>
                                    <img className={cx('group-12')} alt="Group" src={images.logoFacebookBold} />
                                </div>
                            </div>
                            <div className={cx('group-13')}>
                                <div className={cx('overlap-group-3')}>
                                    <div className={cx('text-wrapper-22')}>Google</div>
                                    <img className={cx('vector-3')} alt="Vector" src={images.logoGoogle} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('group-wrapper')}>
                        <div className={cx('group-14')}>
                            <img className={cx('logo-SOS-ver-mau')} alt="Logo SOS ver mau" src={images.logo} />
                            <p className={cx('text-wrapper-23')}>Sẵn sàng ứng phó, tự cứu chính mình</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
