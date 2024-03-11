import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <p className={cx('text-logo-fb-ins-p-m')}>Liên hệ với chúng tôi</p>
            <p className={cx('text-logo-sos')}>Sẵn sàng ứng phó, tự cứu chính mình</p>
            <Link to={config.routes.khancap}>
                <div className={cx('text-khan-cap')}>Khẩn cấp</div>
            </Link>
            <Link to={config.routes.chuandoan}>
                <div className={cx('text-tra-cuu')}>Tra cứu</div>
            </Link>
            <Link to={config.routes.kynang}>
                <div className={cx('text-ky-nang')}>Học kỹ năng</div>
            </Link>
            <Link to={config.routes.thuchanh}>
                <div className={cx('text-thuc-hanh')}>Thực hành</div>
            </Link>
            <Link to={config.routes.profile}>
                <div className={cx('text-ca-nhan')}>Cá nhân</div>
            </Link>
            <Link to={config.routes.khancap}>
                <div className={cx('text-ve-sos')}>Về Khẩn cấp SOS</div>
            </Link>
            <Link to={config.routes.home}>
                <img className={cx('logo-white-sos')} alt="Logo white sos" src={images.logoWhiteSOS} />
            </Link>
            <a href="https://www.facebook.com/profile.php?id=61555613785501" target="_blank" rel="noopener noreferrer">
                <img className={cx('logo-fb')} alt="Logo Fb" src={images.logoFb} />
            </a>
            <a href="https://www.instagram.com/khancapsos_/" target="_blank" rel="noopener noreferrer">
                <img className={cx('logo-instagram')} alt="Logo Instagram" src={images.logoInst} />
            </a>
            <a href="tel:+1234567890">
                <img className={cx('logo-phone')} alt="Logo phone" src={images.logoPhone} />
            </a>
            <a href="mailto:khancapsos.webapp@gmail.com">
                <img className={cx('logo-mail')} alt="Logo mail" src={images.logoMail} />
            </a>
        </div>
    );
}

export default Footer;
