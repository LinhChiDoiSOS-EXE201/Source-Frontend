import classNames from 'classnames/bind';
import styles from './HocKyNangDetail.module.scss';
import { useParams } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

// const data = (
//     <div style="width: 100%; margin-top: 200px; justify-content: center; align-items: center; align-content: center; position: relative; display: grid;">
//         <h1 style="font-size: 45px; font-weight: 900; color: #000000; justify-content: center; text-align: center; margin-bottom: 10px;">
//             Nguyên Tắc An Toàn Trong Sơ Cứu: Bảo Vệ Sức Khỏe Mọi Người
//         </h1>
//         <p style="font-size: 28px; color: #000000; margin-bottom: 60px; text-align: center;">Kiến thức Sơ cấp cứu</p>
//         <p style="display: flex; font-size: 26.7px; font-weight: 500; width: 50%; margin: auto;">
//             Sơ cứu là một kỹ năng cơ bản mà mỗi người nên biết, vì nó có thể giữ lại mạng sống cho người khác trong
//             những tình huống khẩn cấp. Tuy nhiên, sự hiểu biết về những nguyên tắc an toàn trong quá trình thực hiện sơ
//             cứu cũng quan trọng không kém. Dưới đây là những nguyên tắc quan trọng cần tuân thủ để đảm bảo an toàn cho
//             cả người cứu thương lẫn người bị nạn.
//         </p>
//         <img
//             style="width: 600px; height: 400px; margin-bottom: 40px; margin-top: 40px; margin-left: auto; margin-right: auto;"
//             src="https://firebasestorage.googleapis.com/v0/b/linhchidoisos.appspot.com/o/SoCapCuu%2Fsocapcuu.jpg?alt=media&token=8f3138c9-174e-4933-867e-c4ae18095c1f"
//             alt="svg"
//         />
//         <div style="margin-bottom: 40px;">
//             <p style="display: flex; font-size: 30px; font-weight: 900; width: 50%; margin: auto;">
//                 1. Bảo Vệ Bản Thân Đầu Tiên
//             </p>
//             <p style="display: flex; font-size: 26.7px; font-weight: 500; width: 50%; margin: auto;">
//                 Khi đối mặt với tình huống sơ cứu, quyết định đầu tiên và quan trọng nhất là bảo vệ chính bạn. Đảm bảo
//                 rằng không có nguy hiểm nào tiếp tục tồn tại trước khi tiếp cận người bị nạn. Đeo bảo hộ cá nhân nếu có
//                 thể, và luôn đánh giá an toàn cho cả mình và người xung quanh.
//             </p>
//         </div>
//         <div style="margin-bottom: 40px;">
//             <p style="display: flex; font-size: 30px; font-weight: 900; width: 50%; margin: auto;">
//                 2. Gọi Cấp Cứu Trước Khi Hành Động
//             </p>
//             <p style="display: flex; font-size: 26.7px; font-weight: 500; width: 50%; margin: auto;">
//                 Trước khi bắt đầu thực hiện bất kỳ biện pháp sơ cứu nào, việc gọi đến số điện thoại cấp cứu là điều quan
//                 trọng. Cung cấp thông tin chi tiết về tình hình và tuân theo hướng dẫn từ bác sĩ điều phối giúp đảm bảo
//                 có kế hoạch chăm sóc y tế chính xác và nhanh chóng.
//             </p>
//         </div>
//         <div style="margin-bottom: 40px;">
//             <p style="display: flex; font-size: 30px; font-weight: 900; width: 50%; margin: auto;">
//                 3. Đánh Giá An Toàn Của Môi Trường
//             </p>
//             <p style="display: flex; font-size: 26.7px; font-weight: 500; width: 50%; margin: auto;">
//                 Trước khi tiếp cận nạn nhân, hãy đánh giá môi trường xung quanh để đảm bảo an toàn cho cả người cứu
//                 thương và người bị nạn. Loại bỏ các nguy cơ tiềm ẩn như lửa, điện áp cao, hoặc vật dụng gây nguy hiểm.
//             </p>
//         </div>
//         <div style="margin-bottom: 40px;">
//             <p style="display: flex; font-size: 30px; font-weight: 900; width: 50%; margin: auto;">
//                 4. Động Tác Nhẹ Nhàng và Hiệu Quả
//             </p>
//             <p style="display: flex; font-size: 26.7px; font-weight: 500; width: 50%; margin: auto;">
//                 Trong quá trình thực hiện sơ cứu, hãy luôn tuân thủ nguyên tắc "động tác nhẹ nhàng". Tránh gây thêm tổn
//                 thương cho nạn nhân và chỉ thực hiện những biện pháp mà bạn đã được đào tạo. Sự nhẹ nhàng kết hợp với
//                 hiệu quả sẽ giúp giảm nguy cơ gặp phải tác động phụ không mong muốn.
//             </p>
//         </div>
//         <div style="margin-bottom: 40px;">
//             <p style="display: flex; font-size: 30px; font-weight: 900; width: 50%; margin: auto;">
//                 5. Đề Xuất Giúp Đỡ Từ Người Xung Quanh
//             </p>
//             <p style="display: flex; font-size: 26.7px; font-weight: 500; width: 50%; margin: auto;">
//                 Trong một tình huống khẩn cấp, không ngần ngại hỏi xem có ai khác có kỹ năng sơ cứu hay không. Sự hợp
//                 tác giữa mọi người có thể tăng khả năng cứu sống và giảm áp lực cho người cứu thương chính.
//             </p>
//         </div>
//         <div style="margin-top: 40px; margin-bottom: 80px;">
//             <p style="display: flex; font-size: 26.7px; font-weight: 500; width: 50%; margin: auto;">
//                 Nhớ rằng, việc thực hiện sơ cứu không chỉ là về việc cứu sống mà còn là về cách làm đúng để đảm bảo an
//                 toàn cho tất cả mọi người liên quan. Hãy hiểu rõ và áp dụng những nguyên tắc an toàn này để sẵn sàng đối
//                 mặt với mọi tình huống khẩn cấp một cách hiệu quả và an toàn.
//             </p>
//         </div>
//     </div>
// );

function KyNangDetail() {
    const [data1, setData1] = useState([]);

    const { id } = useParams(); // Lấy tất cả các tham số từ URL
    console.log('Course ID: ', id);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://linhchidoi.azurewebsites.net/api/v1/course-detail/${id}/871a809a-b3fa-495b-9cc2-c5d738a866cf`,
            );
            const jsonData = await response.json();
            console.log(jsonData.content);
            setData1(jsonData);
        };

        fetchData();
    }, []);
    return <div className={cx('container')} dangerouslySetInnerHTML={{ __html: data1.content }} />;
}
export default KyNangDetail;
