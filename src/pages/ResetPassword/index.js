import classNames from 'classnames/bind';
import styles from './ResetPassword.module.scss';
import { useState } from 'react';
import { axiosPublic } from '~/api/axiosInstance';
import { RESETPASSWORD } from '~/utils/apiContrants';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import config from '~/config';
import ResetPasswordSnackbar from './ResetPasswordSnackbar';

const cx = classNames.bind(styles);
function ResetPassword() {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const handleClose = () => {
        setOpen(false);
    };
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const formData = new FormData();
    const search = async () => {
        try {
            formData.append('Email', email);
            const response = await axiosPublic.post(RESETPASSWORD, formData);
            if (response.status === 200) {
                toast.success(response.data.message);
                navigate(config.routes.changepassword, { state: { email } });
            }
        } catch (error) {
            console.log(error);
            if (error.response.status === 500) {
                setText('Đăng Ký không thành công.');
                setOpen(true);
            }
        }
    };
    return (
        <div className={cx('container')}>
            <div className={cx('text-wrapper-header')}>Tìm tài khoản của bạn</div>
            <hr className={cx('horizontal-line')} />
            <div className={cx('text-wrapper-body')}>Vui lòng nhập email để tìm kiếm tài khoản của bạn.</div>
            <input
                className={cx('text-input-email')}
                placeholder="Email của bạn"
                spellCheck={false}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className={cx('buttons-container')}>
                <button className={cx('button-cancel')}>Hủy</button>
                <button type="button" className={cx('button-search')} onClick={search}>
                    Tìm kiếm
                </button>
            </div>
            <ResetPasswordSnackbar open={open} handleClose={handleClose} text={text} />
        </div>
    );
}

export default ResetPassword;
