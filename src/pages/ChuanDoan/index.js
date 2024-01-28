import classNames from 'classnames/bind';
import styles from './ChuanDoan.module.scss';

const cx = classNames.bind(styles);
function ChuanDoan() {
    return (
        <div className={cx('box')}>
            <div className={cx('rectangle')}></div>
        </div>
    );
}

export default ChuanDoan;
