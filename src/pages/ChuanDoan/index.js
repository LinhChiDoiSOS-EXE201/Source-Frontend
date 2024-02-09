import classNames from 'classnames/bind';
import styles from './ChuanDoan.module.scss';
import images from '~/assets/images';
import { useEffect, useState } from 'react';
import Select, { components } from 'react-select';

const data = [
    {
        id: 1,
        title: 'Đầu',
        keyword: [
            {
                value: 1,
                label: 'Đau nữa đầu trước',
            },
            {
                value: 2,
                label: 'Đau nữa đầu sau',
            },
            {
                value: 3,
                label: 'Tê trán',
            },
            {
                value: 4,
                label: 'Ù tai',
            },
            {
                value: 5,
                label: 'Chóng mặt',
            },
        ],
    },
    {
        id: 2,
        title: 'Mắt',
        keyword: [
            {
                value: 6,
                label: 'Mắt lờ đờ',
            },
            {
                value: 7,
                label: 'Đỏ mắt',
            },
            {
                value: 8,
                label: 'Đau mắt',
            },
            {
                value: 9,
                label: 'Chảy nước mắt',
            },
        ],
    },
    {
        id: 3,
        title: 'Miệng',
        keyword: [
            {
                value: 10,
                label: 'Mất vị giác',
            },
            {
                value: 11,
                label: 'Tê liệt một phần môi',
            },
            {
                value: 12,
                label: 'Khó nói chuyện',
            },
            {
                value: 13,
                label: 'Răng va vào nhau',
            },
            {
                value: 14,
                label: 'Chảy máu chân răng',
            },
            {
                value: 15,
                label: 'Nóng rang cổ họng',
            },
            {
                value: 16,
                label: 'Ho khan',
            },
            {
                value: 17,
                label: 'Buồn nôn ',
            },
        ],
    },
    {
        id: 4,
        title: 'Xương khớp',
        keyword: [
            {
                value: 18,
                label: 'Xưng tấy ngoài da',
            },
            {
                value: 19,
                label: 'Đau nhói',
            },
            {
                value: 20,
                label: 'Không thể cử động',
            },
            {
                value: 21,
                label: 'Có tiếng lạo xạo',
            },
            {
                value: 22,
                label: 'Bầm tím',
            },
            {
                value: 23,
                label: 'Điểm gồ lên trên da',
            },
        ],
    },
    {
        id: 5,
        title: 'Mũi',
        keyword: [
            {
                value: 24,
                label: 'Khó thở',
            },
            {
                value: 25,
                label: 'Nghẹt mũi',
            },
            {
                value: 26,
                label: 'Sổ mũi',
            },
            {
                value: 27,
                label: 'Chảy máu cam',
            },
            {
                value: 28,
                label: 'Nước mũi có mùi hôi',
            },
        ],
    },
    {
        id: 6,
        title: 'Tim',
        keyword: [
            {
                value: 29,
                label: 'Đập nhanh',
            },
            {
                value: 30,
                label: 'Đau nhói nhẹ',
            },
            {
                value: 31,
                label: 'Đau nhói thường xuyên',
            },
            {
                value: 32,
                label: 'Cảm giác chèn ép',
            },
        ],
    },
];

const listKeyword = [
    {
        value: 1,
        label: 'Đau nữa đầu trước',
    },
    {
        value: 2,
        label: 'Đau nữa đầu sau',
    },
    {
        value: 3,
        label: 'Tê trán',
    },
    {
        value: 4,
        label: 'Ù tai',
    },
    {
        value: 5,
        label: 'Chóng mặt',
    },
    {
        value: 6,
        label: 'Mắt lờ đờ',
    },
    {
        value: 7,
        label: 'Đỏ mắt',
    },
    {
        value: 8,
        label: 'Đau mắt',
    },
    {
        value: 9,
        label: 'Chảy nước mắt',
    },
    {
        value: 10,
        label: 'Mất vị giác',
    },
    {
        value: 11,
        label: 'Tê liệt một phần môi',
    },
    {
        value: 12,
        label: 'Khó nói chuyện',
    },
    {
        value: 13,
        label: 'Răng va vào nhau',
    },
    {
        value: 14,
        label: 'Chảy máu chân răng',
    },
    {
        value: 15,
        label: 'Nóng rang cổ họng',
    },
    {
        value: 16,
        label: 'Ho khan',
    },
    {
        value: 17,
        label: 'Buồn nôn ',
    },
    {
        value: 18,
        label: 'Xưng tấy ngoài da',
    },
    {
        value: 19,
        label: 'Đau nhói',
    },
    {
        value: 20,
        label: 'Không thể cử động',
    },
    {
        value: 21,
        label: 'Có tiếng lạo xạo',
    },
    {
        value: 22,
        label: 'Bầm tím',
    },
    {
        value: 23,
        label: 'Điểm gồ lên trên da',
    },
    {
        value: 24,
        label: 'Khó thở',
    },
    {
        value: 25,
        label: 'Nghẹt mũi',
    },
    {
        value: 26,
        label: 'Sổ mũi',
    },
    {
        value: 27,
        label: 'Chảy máu cam',
    },
    {
        value: 28,
        label: 'Nước mũi có mùi hôi',
    },
    {
        value: 29,
        label: 'Đập nhanh',
    },
    {
        value: 30,
        label: 'Đau nhói nhẹ',
    },
    {
        value: 31,
        label: 'Đau nhói thường xuyên',
    },
    {
        value: 32,
        label: 'Cảm giác chèn ép',
    },
];

const cx = classNames.bind(styles);
function ChuanDoan() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [forceUpdateFlag, setForceUpdateFlag] = useState(false);

    const { IndicatorSeparator, DropdownIndicator, ClearIndicator, MultiValueRemove, ...otherComponents } = components;

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
        setSelectedOptions(selectedValues);
    };

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

    const search = () => {
        console.log(selectedOptions);
        //fetch data
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
                            fontSize: '20px',
                            fontWeight: '500',
                            fontFamily: 'Darker Grotesque',
                            paddingLeft: '10px',
                        }),
                        multiValue: (provided, state) => ({
                            ...provided,
                            borderRadius: '15px',
                            paddingLeft: '10px',
                            backgroundColor: '#7C83FD',
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

            <div className={cx('container')}>
                {data.map((item) => {
                    return (
                        <div key={item.id} className={cx('body-parts')}>
                            <div className={cx('baby-rectangle')}>{item.title}</div>
                            <div className={cx('sub-container')}>
                                {item.keyword.map((element) => {
                                    return (
                                        <button
                                            type="button"
                                            key={element.value}
                                            id={element.value}
                                            onClick={handleKeywordClick}
                                            className={cx('sub-baby-rectangle')}
                                        >
                                            {element.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ChuanDoan;
