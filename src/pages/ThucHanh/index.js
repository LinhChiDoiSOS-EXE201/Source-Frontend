import classNames from 'classnames/bind';
import styles from './ThucHanh.module.scss';
import bacSi from '../../assets/images/bacSi.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const cardData = [
    {
        id: 1,
        title: 'Thạc sĩ, Bác sĩ',
        name: 'Lê Trung Nghĩa',
        content: 'Chuyên khoa Vật lý trị liệu, Đại học Y Dược TP.HCM',
        img: bacSi,
    },
    // {
    //     id: 2,
    //     title: 'Thạc sĩ, Bác sĩ',
    //     name: 'Lê Trung Nghĩa',
    //     content: 'Chuyên khoa Vật lý trị liệu, Đại học Y Dược TP.HCM',
    //     img: bacSi,
    // },
    // {
    //     id: 3,
    //     title: 'Thạc sĩ, Bác sĩ',
    //     name: 'Lê Trung Nghĩa',
    //     content: 'Chuyên khoa Vật lý trị liệu, Đại học Y Dược TP.HCM',
    //     img: bacSi,
    // },
    // {
    //     id: 4,
    //     title: 'Thạc sĩ, Bác sĩ',
    //     name: 'Lê Trung Nghĩa',
    //     content: 'Chuyên khoa Vật lý trị liệu, Đại học Y Dược TP.HCM',
    //     img: bacSi,
    // },
    // {
    //     id: 5,
    //     title: 'Thạc sĩ, Bác sĩ',
    //     name: 'Lê Trung Nghĩa',
    //     content: 'Chuyên khoa Vật lý trị liệu, Đại học Y Dược TP.HCM',
    //     img: bacSi,
    // },
    // {
    //     id: 6,
    //     title: 'Thạc sĩ, Bác sĩ',
    //     name: 'Lê Trung Nghĩa',
    //     content: 'Chuyên khoa Vật lý trị liệu, Đại học Y Dược TP.HCM',
    //     img: bacSi,
    // },
    // {
    //     id: 7,
    //     title: 'Thạc sĩ, Bác sĩ',
    //     name: 'Lê Trung Nghĩa',
    //     content: 'Chuyên khoa Vật lý trị liệu, Đại học Y Dược TP.HCM',
    //     img: bacSi,
    // },
    // {
    //     id: 8,
    //     title: 'Thạc sĩ, Bác sĩ',
    //     name: 'Lê Trung Nghĩa',
    //     content: 'Chuyên khoa Vật lý trị liệu, Đại học Y Dược TP.HCM',
    //     img: bacSi,
    // },
];

function ThucHanh() {
    const nav = useNavigate();

    const handleReadMore = (e) => {
        const id = e.target.parentElement.id;
        console.log(`id: ${id}`);
        nav(`/thuchanh/${id}`);
    };

    useEffect(() => {});

    return (
        <div className={cx('thucHanh')}>
            <h1 className={cx('thucHanh_title')}>Gặp gỡ ngay cùng các chuyên gia để thực hành ứng phó khẩn cấp</h1>
            <div className={cx('card-container')}>
                {cardData.map((card, index) => {
                    return (
                        <div className={cx('card')} key={index}>
                            <img src={card.img} alt="img" className={cx('cardImg')} />
                            <div className={cx('card-detail')} id={card.id}>
                                <h3 className={cx('card-title')}>{card.title}</h3>
                                <h3 className={cx('card-title')}>{card.name}</h3>
                                <p className={cx('card-content')}>{card.content}</p>
                                <div className={cx('read-more')} onClick={handleReadMore}>
                                    Xem Thêm
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ThucHanh;
