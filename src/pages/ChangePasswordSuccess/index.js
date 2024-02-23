import classNames from 'classnames/bind';
import styles from './ChangePasswordSuccess.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);
function ChangePasswordSucess() {
    return (
        <div className={cx('container')}>
            <div className={cx('text-wrapper-header')}>Bạn đã đổi mật khẩu thành công</div>
            <hr className={cx('horizontal-line')} />
            <div className={cx('text-wrapper-body')}>Tiếp tục đăng nhập để khám phá các tính năng của Khẩn Cấp SOS</div>
            <div className={cx('button-container')}>
                <Link to={config.routes.login} className={cx('button-login')}>
                    <div>Đăng nhập</div>
                </Link>
            </div>
        </div>
    );
}

export default ChangePasswordSucess;
