import classNames from 'classnames/bind';
import styles from './ChuanDoan.module.scss';
import images from '~/assets/images';
import { useEffect, useState } from 'react';
import Select, { components } from 'react-select';
import { axiosPublic } from '~/api/axiosInstance';
import { GETALLCATEGORY, TRACUU } from '~/utils/apiContrants';

const cx = classNames.bind(styles);
function ChuanDoan() {
    const [allCategorys, setAllCategorys] = useState([]);
    const [listKeyword, setListKeyword] = useState([]);
    const [chuanDoanResult, setChuanDoanResult] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [forceUpdateFlag, setForceUpdateFlag] = useState(false);
    const [isSearched, setIsSearched] = useState(false);

    const { IndicatorSeparator, DropdownIndicator, ClearIndicator, MultiValueRemove, ...otherComponents } = components;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosPublic.get(GETALLCATEGORY);
            setAllCategorys(response.data);

            const updatedListKeyword = response.data.reduce((acc, category) => {
                return acc.concat(category.listKeywordData);
            }, []);

            const transformedListKeyword = updatedListKeyword.map((item) => ({
                value: item.id,
                label: item.name,
            }));

            setListKeyword(transformedListKeyword);
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(selectedOptions);
        document.querySelectorAll(`.${cx('active')}`).forEach((item) => {
            if (selectedOptions.findIndex((x) => x.value === item.id) === -1) {
                item.classList.remove(cx('active'));
            }
        });
        selectedOptions.forEach((item) => {
            document.getElementById(item.value).classList.add(cx('active'));
        });
    }, [selectedOptions]);

    const handleKeywordClick = async (e) => {
        if (e.target.classList.contains(cx('active'))) {
            e.target.classList.remove(cx('active'));
            const tmp = selectedOptions.filter((item) => item.value !== e.target.id);
            setSelectedOptions(tmp);
        } else {
            e.target.classList.add(cx('active'));
            setSelectedOptions([...selectedOptions, { value: e.target.id, label: e.target.textContent }]);
        }
        setForceUpdateFlag(!forceUpdateFlag);
    };

    const handleSelectChange = (selectedValues) => {
        setIsSearched(false);
        setSelectedOptions(selectedValues);
    };

    const search = async () => {
        const keywordListData = selectedOptions.map((item) => ({ keywordId: item.value }));
        const response = await axiosPublic.post(TRACUU, {
            keywordListData,
        });
        setChuanDoanResult(response.data);
        setIsSearched(true);
    };

    return (
        <div className={cx('rectangle')}>
            <p className={cx('text-wrapper-header')}>
                Kết quả chẩn đoán dựa trên những triệu chứng của người bệnh, kết quả chỉ mang tính tham khảo.
                <br />
                Khẩn Cấp SOS khuyến khích người bệnh đến trung tâm y tế để kiểm tra sức khỏe một cách chuẩn xác nhất.
            </p>
            <div className={cx('searchContainer')}>
                <Select
                    options={listKeyword}
                    isMulti
                    placeholder="Chọn các triệu chứng bạn đang mắc phải"
                    components={{
                        ...otherComponents,
                        IndicatorSeparator: () => null,
                        DropdownIndicator: () => null,
                        ClearIndicator: () => null,
                    }}
                    styles={{
                        control: () => ({
                            width: '735px',
                            border: '2px solid white',
                            borderRadius: '30px',
                            height: 'auto',
                            minHeight: '50px',
                            padding: '5px 0',
                            fontSize: '20px',
                            fontWeight: '500',
                            fontFamily: 'Darker Grotesque',
                            paddingLeft: '10px',
                        }),
                        multiValue: (provided, state) => ({
                            ...provided,
                            borderRadius: '15px',
                            paddingLeft: '10px',
                            backgroundColor: '#fff',
                        }),
                    }}
                    onChange={handleSelectChange}
                    value={selectedOptions}
                    key={forceUpdateFlag}
                />
                <button type="button" className={cx('search-button')} onClick={search}>
                    <img className={cx('icon-button-search')} alt="IconSearch" src={images.iconSearchWhiteColor} />
                    <p className={cx('label-button-search')}>Tra Cứu</p>
                </button>
            </div>

            {chuanDoanResult && isSearched ? (
                <div className={cx('chuan-doan-result')}>
                    <h3 className={cx('result-title')}>Chuẩn đoán được {chuanDoanResult.length} kết quả tương ứng</h3>
                    <div className={cx('line')} />
                    <div className={cx('result-container')}>
                        {chuanDoanResult.map((chuanDoan) => {
                            return (
                                <div className={cx('result-card')} key={chuanDoan.id}>
                                    <div className={cx('card-img')}>
                                        <p className={cx('chuan-doan-name')}>{chuanDoan.name}</p>
                                        <img />
                                    </div>
                                    <div className={cx('card-content')}>
                                        <p className={cx('discription')}>{chuanDoan.description}</p>
                                        <p className={cx('trieu-chung')}>Triệu chứng thường gặp</p>
                                        <div className={cx('keyword-container')}>
                                            {chuanDoan.keywordListData.map((keyword) => {
                                                return <div className={cx('keyword')}>{keyword.name}</div>;
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className={cx('container')}>
                    {allCategorys &&
                        allCategorys.map((category) => {
                            return (
                                <div key={category.id} className={cx('body-parts')}>
                                    <div className={cx('baby-rectangle')}>{category.name}</div>
                                    <div className={cx('sub-container')}>
                                        {category.listKeywordData.map((element) => {
                                            return (
                                                <button
                                                    type="button"
                                                    key={element.id}
                                                    id={element.id}
                                                    onClick={handleKeywordClick}
                                                    className={cx('sub-baby-rectangle')}
                                                >
                                                    {element.name}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                </div>
            )}
        </div>
    );
}

export default ChuanDoan;
