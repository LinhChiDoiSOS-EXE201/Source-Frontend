import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './KhanCap.module.scss';

const cx = classNames.bind(styles);

function Category() {
    const [data, setData] = useState(null);

    const handleClick = async (modelId) => {
        window.location.href = `/khancapdetail?emergencyId=${modelId}`;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7250/api/v1/emergencycategorys');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data from API', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className={cx('box')}>
            <div className={cx('rectangle')}>
                <ul>
                    {data &&
                        data.map((item, index) => (
                            <li key={index} className={cx('item-header')}>
                                <div className={cx('tittle-box')}>
                                    <div className={cx('tittle-rectangle')}>
                                        <div className={cx('text-wrapper')}>{item.name}</div>
                                    </div>
                                </div>
                                <ul className={cx('list-box')}>
                                    {item.emergencyModels &&
                                        item.emergencyModels.map((model, modelIndex) => {
                                            const svgWithUniqueIds = model.image
                                                .replace(/pattern0/g, `pattern${model.emergencyId}`)
                                                .replace(/image0_269_686/g, `image${model.emergencyId}`);
                                            return (
                                                <button
                                                    key={model.emergencyId}
                                                    onClick={() => handleClick(model.emergencyId)}
                                                    className={cx('content-box')}
                                                >
                                                    <div className={cx('group')}>
                                                        <div className={cx('overlap-group')}>
                                                            <div
                                                                className={cx('layer')}
                                                                dangerouslySetInnerHTML={{ __html: svgWithUniqueIds }}
                                                            />
                                                            <div className={cx('text-wrapper-box')}>{model.title}</div>
                                                        </div>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                </ul>
                            </li>
                        ))}
                </ul>
                {/* <ul>
                    <li className={cx('item-header')}>
                        <div className={cx('tittle-box')}>
                            <div className={cx('tittle-rectangle')}>
                                <div className={cx('text-wrapper')}>Khan Capaaaaaaa</div>
                            </div>
                        </div>
                        <ul className={cx('list-box')}>
                            <li>
                                <button className={cx('content-box')}>
                                    <div className={cx('group')}>
                                        <div className={cx('overlap-group')}>
                                            <img className={cx('layer')} alt="Layer" src={images.fire} />
                                            <div className={cx('text-wrapper-box')}>Hoa hoan</div>
                                        </div>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </li>

                    <li className={cx('item-header')}>
                        <div className={cx('tittle-box')}>
                            <div className={cx('tittle-rectangle')}>
                                <div className={cx('text-wrapper')}>ádasdasdss ád</div>
                            </div>
                        </div>
                    </li>
                </ul> */}
            </div>
        </div>
    );
}
{
    /* <div className={cx('tittle-box')}>
                    <div className={cx('tittle-rectangle')}>
                        <div className={cx('text-wrapper')}>Khan Cap</div>
                    </div>
                </div>
                <button className={cx('content-box')}>
                    <div className={cx('group')}>
                        <div className={cx('overlap-group')}>
                            <img className={cx('layer')} alt="Layer" src={images.fire} />
                            <div className={cx('text-wrapper-box')}>Hoa hoan</div>
                        </div>
                    </div>
                </button> */
}
export default Category;
