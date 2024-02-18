import classNames from 'classnames/bind';
import styles from './KhapCapDetail.module.scss';
import images from '~/assets/images';
import ContentDetail from '~/components/ContentDetail';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';

const cx = classNames.bind(styles);

function KhanCapDetail() {
    let urlParams = new URLSearchParams(window.location.search);
    let emergencyId = urlParams.get('emergencyId');
    const colorRef1 = useRef();

    console.log(emergencyId);

    const [data, setData] = useState(null);
    const [currentStep, setCurrentStep] = useState(1); // Thêm state này

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://linhchidoi.azurewebsites.net/api/v1/emergencycategorys/${emergencyId}`,
                );
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data from API', error);
            }
        };

        fetchData();
    }, [emergencyId]);

    let currentItem = data && data.find((item) => item.step === currentStep);
    console.log('ahihi');
    console.log(currentItem);
    const maxStep = data && Math.max(...data.map((item) => item.step));
    console.log(maxStep);
    const handleClick = async () => {
        window.location.href = `/khancap`;
    };

    return (
        <div className={cx('box')}>
            <div className={cx('rectangle')}>
                {currentItem && (
                    <ContentDetail
                        step={currentItem.step}
                        topContent={currentItem.topContent}
                        contentLeft={currentItem.contentLeft}
                        contentLeftUrl={currentItem.contentLeftUrl}
                        contentRight={currentItem.contentRight}
                        contentRightUrl={currentItem.contentRightUrl}
                        mainPictureUrl={currentItem.mainPictureUrl}
                        actionContent={currentItem.actionContent}
                        contentBottom={currentItem.contentBottom}
                        isSafe={currentItem.isSafe}
                        emergencyId={currentItem.emergencyId}
                        miniContentModelOfEDs={currentItem.miniContentModelOfEDs}
                        answerContentModelOfEDs={currentItem.answerContentModelOfEDs}
                    />
                )}
                {currentStep === maxStep ? (
                    <button ref={colorRef1} className={cx('next-button-back')} onClick={handleClick}>
                        <p className={cx('p-next')}>Quay lại trang chủ</p>
                        <img alt="next-icon" src={images.nexticon} />
                    </button>
                ) : currentItem !== null && currentItem.isSafe === true ? (
                    <button className={cx('next-button-safe')} onClick={() => setCurrentStep(currentStep + 1)}>
                        <p className={cx('p-next')}>Tiếp </p>
                        <img alt="next-icon" src={images.nexticon} />
                    </button>
                ) : (
                    <button className={cx('next-button')} onClick={() => setCurrentStep(currentStep + 1)}>
                        <p className={cx('p-next')}>Tiếp </p>
                        <img alt="next-icon" src={images.nexticon} />
                    </button>
                )}
                {/* {currentStep === maxStep ? (
                    <button ref={colorRef1} className={cx('next-button-back')} onClick={handleClick}>
                        <p className={cx('p-next')}>Quay lại trang chủ</p>
                        <img alt="next-icon" src={images.nexticon} />
                    </button>
                ) : (
                    <button className={cx('next-button')} onClick={() => setCurrentStep(currentStep + 1)}>
                        <p className={cx('p-next')}>Tiếp </p>
                        <img alt="next-icon" src={images.nexticon} />
                    </button>
                )} */}
            </div>
        </div>
    );
}

export default KhanCapDetail;
