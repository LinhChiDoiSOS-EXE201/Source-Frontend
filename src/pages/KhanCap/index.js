import classNames from 'classnames/bind';
import styles from './KhanCap.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function KhanCap() {
    return (
        <div className={cx('box')}>
            <div className={cx('rectangle')}>
                <div className={cx('tittle-box')}>
                    <div className={cx('tittle-rectangle')}>
                        <div className={cx('text-wrapper')}>Khan Cap</div>
                    </div>
                </div>
                <div className={cx('content-box')}>
                    <div className={cx('group')}>
                        <div className={cx('overlap-group')}>
                            <img className={cx('layer')} alt="Layer" src={images.fire} />
                            <div className={cx('text-wrapper-box')}>Hoa hoan</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KhanCap;
