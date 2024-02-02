import styles from './ContentDetail.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import React, { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

export default function ContentDetail({ ...props }) {
    const pRef = useRef();
    const colorRef1 = useRef();
    const colorRef2 = useRef();
    const colorRef3 = useRef();

    const text = props.actionContent;

    useEffect(() => {
        if (pRef.current) {
            if (text.length > 20) {
                // adjust this value as needed
                pRef.current.style.fontSize = '22px'; // adjust this value as needed
            } else {
                pRef.current.style.fontSize = '40px';
            }
        }
    }, [text]);

    useEffect(() => {
        if (colorRef1.current) {
            if (props.isSafe) {
                colorRef1.current.style.backgroundColor = '#025B67';
            } else {
                colorRef1.current.style.backgroundColor = '#FF0000';
            }
        }
    }, [props.isSafe, colorRef1]);
    useEffect(() => {
        if (colorRef2.current) {
            if (props.isSafe) {
                colorRef2.current.style.backgroundColor = '#025B67';
            } else {
                colorRef2.current.style.backgroundColor = '#FF0000';
            }
        }
    }, [props.isSafe, colorRef2]);
    useEffect(() => {
        if (colorRef3.current) {
            if (props.isSafe) {
                colorRef3.current.style.backgroundColor = '#025B67';
            } else {
                colorRef3.current.style.backgroundColor = '#FF0000';
            }
        }
    }, [props.isSafe, colorRef3]);

    const mainPic = images[props.mainPictureUrl];
    const leftPic = images[props.contentLeftUrl];
    console.log(props.contentLeftUrl);
    console.log('leftPic', leftPic);
    const rightPic = images[props.contentRightUrl];
    console.log('rightPic', rightPic);
    return (
        <>
            <div className={cx('container')}>
                <p className={cx('container-header')}>MỤC TIÊU</p>
                <div ref={colorRef1} className={cx('box-header-container')}>
                    {props.topContent.split('\r\n').map((line, index) => (
                        <p key={index} className={cx('p')}>
                            {line}
                        </p>
                    ))}
                </div>
                <div className={cx('picture-container')}>
                    <img alt="ImageSoCuu" src={mainPic}></img>
                </div>
                <div ref={colorRef2} className={cx('box-footer-container')}>
                    <p className={cx('p')} ref={pRef}>
                        {text}
                    </p>
                </div>
                {props.contentLeft && (
                    <div className={cx('left-container')}>
                        <p className={cx('left-p')}>{props.contentLeft}</p>
                        <img className={cx('picture-in-side')} alt="ImageSoCuu" src={leftPic}></img>
                    </div>
                )}
                {props.contentRight && (
                    <div className={cx('right-container')}>
                        <p className={cx('left-p')}>{props.contentRight}</p>
                        <img className={cx('picture-in-side')} alt="ImageSoCuu" src={rightPic}></img>
                    </div>
                )}
            </div>
            {/* Bottom Content */}
            {props.contentBottom && (
                <div className={cx('bottom-content')}>
                    <p className={cx('p-bottom')}>{props.contentBottom}</p>
                </div>
            )}
            {/* Answer Content */}
            {props.answerContentModelOfEDs && (
                <div className={cx('container-answer-content')}>
                    {props.answerContentModelOfEDs.map((item) => {
                        let classesForButton = 'next-button';
                        if (props.isSafe === true) {
                            classesForButton = 'next-button-safe';
                        } else if (item.answer === 'Có') {
                            classesForButton = 'next-button-positive';
                        } else {
                            classesForButton = 'next-button';
                        }
                        //item.answer === 'Có' ? 'p-next-positive' :
                        let classesForP = 'p-next';
                        if (props.isSafe === true) {
                            classesForP = 'p-next-safe';
                        } else if (item.answer === 'Có') {
                            classesForP = 'p-next-positive';
                        } else {
                            classesForP = 'p-next';
                        }
                        return (
                            <button ref={colorRef3} key={item.emergencyDetailId} className={cx(`${classesForButton}`)}>
                                <p className={cx(`${classesForP}`)}>{item.answer}</p>
                            </button>
                        );
                    })}
                    {/* <button className={cx('next-button-positive')}>
                        <p className={cx('p-next-positive')}>Có</p>
                    </button>
                    <button className={cx('next-button')}>
                        <p className={cx('p-next')}>Không</p>
                    </button> */}
                </div>
            )}
            {/* MiniContent */}
            {props.miniContentModelOfEDs && (
                <div className={cx('container-answer-content')}>
                    {props.miniContentModelOfEDs.map((item) => {
                        return (
                            <div className={cx('mini-content')}>
                                <p>{item.content}</p>
                                <img alt="ImageSoCuu" src={images[item.contentUrl]}></img>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* <div className={cx('container-answer-content')}>
            //     <div className={cx('mini-content')}>
            //         <p>Đặt bệnh nhân nằm tư thế chân cao hơn đầu</p>
            //         <img alt="ImageSoCuu" src={images.chan}></img>
            //     </div>
            // </div> */}
        </>
    );
}
