import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <p className={cx('text-logo-fb-ins-p-m')}>Liên hệ với chúng tôi</p>
            <p className={cx('text-logo-sos')}>Sẵn sàng ứng phó, tự cứu chính mình</p>
            <div className={cx('text-khan-cap')}>Khẩn cấp</div>
            <div className={cx('text-tra-cuu')}>Tra cứu</div>
            <div className={cx('text-ky-nang')}>Học kỹ năng</div>
            <div className={cx('text-thuc-hanh')}>Thực hành</div>
            <div className={cx('text-ca-nhan')}>Cá nhân</div>
            <div className={cx('text-ve-sos')}>Về Khẩn cấp SOS</div>
            <img className={cx('logo-white-sos')} alt="Logo white sos" src={images.logoWhiteSOS} />
            <img className={cx('logo-fb')} alt="Logo Fb" src={images.logoFb} />
            <img className={cx('logo-instagram')} alt="Logo Instagram" src={images.logoInst} />
            <img className={cx('logo-phone')} alt="Logo phone" src={images.logoPhone} />
            <img className={cx('logo-mail')} alt="Logo mail" src={images.logoMail} />
        </div>
    );
}

export default Footer;
