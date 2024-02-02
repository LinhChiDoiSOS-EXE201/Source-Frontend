import classNames from 'classnames/bind';
import styles from './ChuanDoan.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function ChuanDoan() {
    return (
        <div className={cx('rectangle')}>
            <p className={cx('text-wrapper-header')}>
                Kết quả chẩn đoán dựa trên những triệu chứng của người bệnh, kết quả chỉ mang tính tham khảo.
                <br />
                Khẩn Cấp SOS khuyến khích người bệnh đến trung tâm y tế để kiểm tra sức khỏe một cách chuẩn xác nhất.
            </p>

            <div className={cx('box-search')}>
                <button className={cx('icon-search')}>
                    <img alt="IconSearch" src={images.iconSearchWhiteColor} />
                </button>
                <input placeholder="Chọn các triệu chứng bạn đang mắc phải" spellCheck={false} />
            </div>

            <div className={cx('search-button')}>
                <img className={cx('icon-button-search')} alt="IconSearch" src={images.iconSearchWhiteColor} />
                <p className={cx('label-button-search')}>Tra Cứu</p>
            </div>

            <div className={cx('baby-rectangle')}></div>
        </div>
    );
}

export default ChuanDoan;
