import styles from './ContentDetail.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import React, { useEffect, useRef } from 'react';
const cx = classNames.bind(styles);

export default function ContentDetail({ ...props }) {
    const pRef = useRef();
    const text = 'Call 114 ';

    useEffect(() => {
        if (pRef.current) {
            if (text.length > 20) {
                // adjust this value as needed
                pRef.current.style.fontSize = '30px'; // adjust this value as needed
            } else {
                pRef.current.style.fontSize = '70px';
            }
        }
    }, [text]);

    // const mainPicture =
    //     props.mainPictureUrl &&
    //     props.mainPictureUrl
    //         .replace(/pattern0/g, `pattern${model.emergencyId}`)
    //         .replace(/image0_269_686/g, `image${model.emergencyId}`);

    return (
        <>
            <div className={cx('container')}>
                <p className={cx('container-header')}>MỤC TIÊU</p>
                <div className={cx('box-header-container')}>
                    {props.topContent.split('\r\n').map((line, index) => (
                        <p key={index} className={cx('p')}>
                            {line}
                        </p>
                    ))}
                </div>
                <div className={cx('picture-container')}>
                    {/*        {item.emergencyModels &&
                                        item.emergencyModels.map((model, modelIndex) => {
                                            const svgWithUniqueIds = model.image
                                                .replace(/pattern0/g, `pattern${model.emergencyId}`)
                                                .replace(/image0_269_686/g, `image${model.emergencyId}`); 
                                                   <div
                                                                className={cx('layer')}
                                                                dangerouslySetInnerHTML={{ __html: svgWithUniqueIds }}
                                                            />*/}
                    {/* <img alt="ImageSoCuu" src=`../src/assets/images/${props.mainPictureUrl}`></img> */}
                    <img alt="ImageSoCuu" src={images.hoahoan_1}></img>
                </div>
                <div className={cx('box-footer-container')}>
                    <p className={cx('p')} ref={pRef}>
                        {text}
                    </p>
                </div>
                <div className={cx('left-container')}>
                    <p className={cx('left-p')}>Chuông báo</p>
                    <img className={cx('picture-in-side')} alt="ImageSoCuu" src={images.chuongbao}></img>
                </div>
                <div className={cx('right-container')}>
                    <p className={cx('left-p')}>Hô hoán</p>
                    <img className={cx('picture-in-side')} alt="ImageSoCuu" src={images.chuongbao}></img>
                </div>
            </div>
            {/* Bottom Content
            <div className={cx('bottom-content')}>
                <p className={cx('p-bottom')}>
                    Quay trở lại phòng trú ẩn, dùng băng dán hoặc vải để dán kín các khe hở tại cửa
                </p>
            </div> */}
            {/* Answer Content */}
            {/* <div className={cx('container-answer-content')}>
                <button className={cx('next-button-positive')}>
                    <p className={cx('p-next-positive')}>Có</p>
                </button>
                <button className={cx('next-button')}>
                    <p className={cx('p-next')}>Không</p>
                </button>
            </div> */}
            {/* MiniContent */}
            {/* <div className={cx('container-answer-content')}>
                <div className={cx('mini-content')}>
                    <p>Đặt bệnh nhân nằm tư thế chân cao hơn đầu</p>
                    <img alt="ImageSoCuu" src={images.chan}></img>
                </div>
                <div className={cx('mini-content')}>
                    <p>Nới lỏng quần áo & đắp chăn</p>
                    <img alt="ImageSoCuu" src={images.chan}></img>
                </div>
                <div className={cx('mini-content')}>
                    <p>Nới lỏng quần áo & đắp chăn</p>
                    <img alt="ImageSoCuu" src={images.chan}></img>
                </div>
            </div> */}
        </>
    );
}
