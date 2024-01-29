import classNames from 'classnames/bind';
import styles from './KyNang.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function KyNang() {
    return (
        <>
            <div className={cx('rectangle-title')}>
                <div className={cx('text-wrapper-title')}>Kiến thức sơ cấp cứu</div>
            </div>

            <div className={cx('container')}>
                <img className={cx('image-so-cuu')} alt="ImageSoCuu" src={images.nguyenTacSoCuu}></img>
                <img className={cx('image-layout-color')} alt="ImageLayout" src={images.layoutColor}></img>
            </div>
        </>
    );
}

export default KyNang;
