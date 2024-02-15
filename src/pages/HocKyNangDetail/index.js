import classNames from 'classnames/bind';
import styles from './HocKyNangDetail.module.scss';
import { axiosPublic } from '~/api/axiosInstance';
import React, { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
const data = (
    <div className={cx('kynangdetail-container')}>
        <h1 className={cx('header')}>Nguyên Tắc An Toàn Trong Sơ Cứu: Bảo Vệ Sức Khỏe Mọi Người</h1>
        <p className={cx('header-minicontent')}>Kiến thức Sơ cấp cứu</p>
        <p className={cx('children')}>
            Sơ cứu là một kỹ năng cơ bản mà mỗi người nên biết, vì nó có thể giữ lại mạng sống cho người khác trong
            những tình huống khẩn cấp. Tuy nhiên, sự hiểu biết về những nguyên tắc an toàn trong quá trình thực hiện sơ
            cứu cũng quan trọng không kém. Dưới đây là những nguyên tắc quan trọng cần tuân thủ để đảm bảo an toàn cho
            cả người cứu thương lẫn người bị nạn.
        </p>
        <img
            className={cx('imgage')}
            src="https://firebasestorage.googleapis.com/v0/b/linhchidoisos.appspot.com/o/SoCapCuu%2Fsocapcuu.jpg?alt=media&token=8f3138c9-174e-4933-867e-c4ae18095c1f"
            alt="svg"
        />
        <div className={cx('paragraph')}>
            <p className={cx('title')}>1. Bảo vệ Bản Thân Đầu Tiên</p>
            <p className={cx('children')}>
                Khi đối mặt với tình huống sơ cứu, quyết định đầu tiên và quan trọng nhất là bảo vệ chính bạn. Đảm bảo
                rằng không có nguy hiểm nào tiếp tục tồn tại trước khi tiếp cận người bị nạn. Đeo bảo hộ cá nhân nếu có
                thể, và luôn đánh giá an toàn cho cả mình và người xung quanh.
            </p>
        </div>
        <div className={cx('paragraph')}>
            <p className={cx('title')}>2. Gọi Cấp Cứu Trước Khi Hành Động</p>
            <p className={cx('children')}>
                Trước khi bắt đầu thực hiện bất kỳ biện pháp sơ cứu nào, việc gọi đến số điện thoại cấp cứu là điều quan
                trọng. Cung cấp thông tin chi tiết về tình hình và tuân theo hướng dẫn từ bác sĩ điều phối giúp đảm bảo
                có kế hoạch chăm sóc y tế chính xác và nhanh chóng.
            </p>
        </div>
        <div className={cx('paragraph')}>
            <p className={cx('title')}>3. Đánh Giá An Toàn Của Môi Trường</p>
            <p className={cx('children')}>
                Trước khi tiếp cận nạn nhân, hãy đánh giá môi trường xung quanh để đảm bảo an toàn cho cả người cứu
                thương và người bị nạn. Loại bỏ các nguy cơ tiềm ẩn như lửa, điện áp cao, hoặc vật dụng gây nguy hiểm.
            </p>
        </div>
        <div className={cx('paragraph')}>
            <p className={cx('title')}>4. Động Tác Nhẹ Nhàng và Hiệu Quả</p>
            <p className={cx('children')}>
                Trong quá trình thực hiện sơ cứu, hãy luôn tuân thủ nguyên tắc "động tác nhẹ nhàng". Tránh gây thêm tổn
                thương cho nạn nhân và chỉ thực hiện những biện pháp mà bạn đã được đào tạo. Sự nhẹ nhàng kết hợp với
                hiệu quả sẽ giúp giảm nguy cơ gặp phải tác động phụ không mong muốn.
            </p>
        </div>
        <div className={cx('paragraph')}>
            <p className={cx('title')}>5. Đề Xuất Giúp Đỡ Từ Người Xung Quanh</p>
            <p className={cx('children')}>
                Trong một tình huống khẩn cấp, không ngần ngại hỏi xem có ai khác có kỹ năng sơ cứu hay không. Sự hợp
                tác giữa mọi người có thể tăng khả năng cứu sống và giảm áp lực cho người cứu thương chính.
            </p>
        </div>
        <div className={cx('conclusion')}>
            <p className={cx('children')}>
                Nhớ rằng, việc thực hiện sơ cứu không chỉ là về việc cứu sống mà còn là về cách làm đúng để đảm bảo an
                toàn cho tất cả mọi người liên quan. Hãy hiểu rõ và áp dụng những nguyên tắc an toàn này để sẵn sàng đối
                mặt với mọi tình huống khẩn cấp một cách hiệu quả và an toàn.
            </p>
        </div>
    </div>
);

function KyNangDetail() {
    //const [data,setData] = useState();
    //const [premium, setPremium] = useState(false);
    useEffect(() => {
        //Check Premium or not
        //fetch data
    }, []);
    return data;
}
export default KyNangDetail;
