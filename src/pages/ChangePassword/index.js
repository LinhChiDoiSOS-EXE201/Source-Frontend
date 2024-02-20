import classNames from 'classnames/bind';
import styles from './ChangePassword.module.scss';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { axiosPublic } from '~/api/axiosInstance';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
import { useState } from 'react';
import { CHANGEPASSWORD } from '~/utils/apiContrants';
import { Box } from '@mui/material';
import ChangePasswordSnackbar from './ChangePasswordSnackbar';

const cx = classNames.bind(styles);
function ChangePassword() {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangePassword = () => {
        const email = document.querySelector('#email').value;
        console.log(email);
        console.log(formik.touched.email);
        console.log(formik.errors.email);
    };

    const formik = useFormik({
        initialValues: {
            passwordCurrent: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Required')
                .matches(
                    // eslint-disable-next-line no-useless-escape
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    'Please enter a valid email address',
                ),
            password: Yup.string()
                .required('Required')
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                    'Password must be 7-19 characters and contain at least one letter, one number and a special character',
                ),
            confirmPassword: Yup.string()
                .required('Required')
                .required('Required')
                .oneOf([Yup.ref('password'), null], 'Password must match'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axiosPublic.post(CHANGEPASSWORD, {
                    email: values.email,
                    currentPassword: values.passwordCurrent,
                    newPassword: values.password,
                });
                if (response.status === 200) {
                    toast.success(response.data.message);
                    navigate(config.routes.changepasswordsuccess);
                }
            } catch (error) {
                console.log(error);
                if (error.response.status === 500) {
                    setText('Đăng Ký không thành công.');
                    setOpen(true);
                }
            }
        },
    });

    return (
        <div className={cx('container')}>
            <div className={cx('text-wrapper-header')}>Tạo mật khẩu mới</div>
            <hr className={cx('horizontal-line')} />
            <div className={cx('text-wrapper-body')}>
                Bạn vui lòng kiểm tra email để nhận mã dể đổi mật khẩu mới nhé.
            </div>
            <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                <input
                    className={cx('text-input-email')}
                    placeholder="Mã được gửi qua email"
                    spellCheck={false}
                    required
                    id="passwordCurrent"
                    name="passwordCurrent"
                    value={formik.values.passwordCurrent}
                    onChange={formik.handleChange}
                    autoComplete="off"
                />
                <input
                    id="email"
                    name="email"
                    required
                    className={cx('text-input-email')}
                    placeholder="Tên tài khoản"
                    spellCheck={false}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    // error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    autoComplete="off"
                    autoFocus
                />
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className={cx('text-input-email')}
                    placeholder="Mật khẩu mới"
                    spellCheck={false}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    helperText={formik.touched.password && formik.errors.password}
                    autoComplete="off"
                />
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    className={cx('text-input-email')}
                    placeholder="Nhập lại mật khẩu mới"
                    spellCheck={false}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    // error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    autoComplete="off"
                />
                <div className={cx('buttons-container')}>
                    <div className={cx('button-cancel')}>
                        <div>Hủy</div>
                    </div>
                    <button
                        onClick={handleChangePassword}
                        className={cx('button-search')}
                        type="submit"
                        variant="contained"
                    >
                        <div>Đổi mật khẩu</div>
                    </button>
                </div>
            </Box>
            <ChangePasswordSnackbar open={open} handleClose={handleClose} text={text} />
        </div>
    );
}

export default ChangePassword;
