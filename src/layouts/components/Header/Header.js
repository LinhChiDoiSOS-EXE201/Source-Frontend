import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('overlap-group')}>
                <div className={cx('rectangle')}>
                    <div className={cx('logo-SOS')}>
                        <img className={cx('icon-button')} src={images.logo} alt="SOS" />
                    </div>
                    <div className={cx('text-khan-cap')}>Khẩn cấp</div>
                    <div className={cx('text-chuan-doan')}>Chẩn đoán</div>
                    <div className={cx('text-ky-nang')}>Học kỹ năng</div>
                    <div className={cx('text-thuc-hanh')}>Thực hành</div>
                    <div className={cx('ellipse-user')}>
                        <img className={cx('user-icon')} src={images.user} alt="User" />
                    </div>
                    <div className={cx('ellipse-search')}>
                        <img className={cx('search-icon')} src={images.search} alt="Search" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
