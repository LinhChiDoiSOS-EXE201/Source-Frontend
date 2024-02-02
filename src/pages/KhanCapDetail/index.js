import classNames from 'classnames/bind';
import styles from './KhapCapDetail.module.scss';
import images from '~/assets/images';
import ContentDetail from '~/components/ContentDetail';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function KhanCapDetail() {
    let urlParams = new URLSearchParams(window.location.search);
    let emergencyId = urlParams.get('emergencyId');
    console.log(emergencyId);

    const [data, setData] = useState(null);
    const [currentStep, setCurrentStep] = useState(1); // Thêm state này

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://localhost:7250/api/v1/emergencycategorys/${emergencyId}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data from API', error);
            }
        };

        fetchData();
    }, [emergencyId]);

    const currentItem = data && data.find((item) => item.step === currentStep);
    console.log(currentItem);

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
                <button className={cx('next-button')} onClick={() => setCurrentStep(currentStep + 1)}>
                    <p className={cx('p-next')}>Tiếp </p>
                    <img alt="next-icon" src={images.nexticon} />
                </button>
            </div>
        </div>
    );
}

export default KhanCapDetail;
