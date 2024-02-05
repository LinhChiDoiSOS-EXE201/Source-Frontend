import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Payment() {
    return (
        <div className={cx('container')}>
            <div className={cx('infoBlock')}>
                <div className={cx('leftSide')}>
                    <div className={cx('blockName')}>THÔNG TIN THANH TOÁN</div>
                    <div className={cx('blockName-1')}>Tổng số tiền: 120.000 VNĐ/năm</div>
                    <div className={cx('blockName-rectangle')}>
                        <div className={cx('blockName-2')}>
                            Ngân hàng: BVBank <br />
                            STK: 99MM23305M53738285 <br />
                            TÊN TÀI KHOẢN: LUU VU YEN NHI <br />
                            hoặc <br />
                            Momo: 0386375389 (LUU VU YEN NHI)
                        </div>
                    </div>
                    <div className={cx('blockName-3')}>CÚ PHÁP</div>
                    <div className={cx('blockName-premium')}>
                        <div className={cx('blockName-4')}>SĐT SOS PREMIUM</div>
                        <div className={cx('blockName-5')}>VD: 0386375389 SOS PREMIUM</div>
                    </div>
                </div>
                <div className={cx('rightSide')}>
                    <div>QUÉT QR NHANH CHÓNG</div>
                    <img src={images.payment} alt=""></img>
                    <div className={cx('blockName-button-payment')}>
                        <div className={cx('blockName-6')}>HOÀN TẤT THANH TOÁN</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
