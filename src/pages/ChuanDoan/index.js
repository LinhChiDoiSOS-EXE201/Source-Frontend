import classNames from 'classnames/bind';
import styles from './ChuanDoan.module.scss';
import images from '~/assets/images';
import { useRef, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);
function ChuanDoan() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    return (
        <div className={cx('rectangle')}>
            <p className={cx('text-wrapper-header')}>
                Kết quả chẩn đoán dựa trên những triệu chứng của người bệnh, kết quả chỉ mang tính tham khảo.
                <br />
                Khẩn Cấp SOS khuyến khích người bệnh đến trung tâm y tế để kiểm tra sức khỏe một cách chuẩn xác nhất.
            </p>

            <Tippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                        </PopperWrapper>
                    </div>
                )}
                className={cx('box-search')}
            >
                <img className={cx('icon-search')} alt="IconSearch" src={images.iconSearchWhiteColor} />
                <p className={cx('text-wrapper-search')}>Chọn các triệu chứng bạn đang mắc phải</p>
            </Tippy>

            <div className={cx('search-button')}>
                <img className={cx('icon-button-search')} alt="IconSearch" src={images.iconSearchWhiteColor} />
                <p className={cx('label-button-search')}>Tra Cứu</p>
            </div>

            <div className={cx('baby-rectangle')}></div>
        </div>
    );
}

export default ChuanDoan;
