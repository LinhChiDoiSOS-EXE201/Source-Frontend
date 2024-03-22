import classNames from 'classnames/bind';
import styles from './KyNang.module.scss';
import images from '~/assets/images';
import { useEffect, useState } from 'react';
import { axiosPublic } from '~/api/axiosInstance';
import { GETALLCOURSE } from '~/utils/apiContrants';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import config from '~/config';

const cx = classNames.bind(styles);
function KyNang() {
    const [categories, setCategory] = useState(null);
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
    const decode = loginInfo ? jwtDecode(loginInfo.accessToken) : null;
    const navigate = useNavigate();

    function handleClickButton(id) {
        console.log(`id: ${id}`);
        navigate(`/kynangdetail/${id}`);
    }

    useEffect(() => {
        const getAllCategory = async () => {
           
                // if(decode.id == null) decode.Id = '1'
                // const id = decode.Id;
                // console.log(id);
                // const isPaidDecode = decode.isPaid;

                // if (isPaidDecode === 'false') {
                //     navigate(`/`);
                //     return;
                // }
                try {
                    const response = await axiosPublic.get(`${GETALLCOURSE}`);
                    if (response.status === 200) {
                        setCategory(response.data);
                    }
                } catch (e) {
                    console.error('Error fetching data:', e);
                }
            
        };

        getAllCategory();
    }, []);
    return (
        <div className={cx('categories-container')}>
            {categories &&
                categories.map((category) => (
                    <div key={category.id} className={cx('category')}>
                        <div className={cx('category-name')}>{category.name}</div>
                        <ul className={cx('course-list')}>
                            {category.courseResponses.map((course) => (
                                <button
                                    className={cx('course-item-button')}
                                    onClick={() => handleClickButton(course.id)}
                                >
                                    <li key={course.id} className={cx('course-item')}>
                                        <div className={cx('course-image')}>
                                            <img src={course.image} alt="Course" />
                                        </div>
                                        <div className={cx('course-name')}>
                                            <p>{course.name}</p>
                                        </div>
                                    </li>
                                </button>
                            ))}
                        </ul>
                    </div>
                ))}
        </div>
    );
}

export default KyNang;
