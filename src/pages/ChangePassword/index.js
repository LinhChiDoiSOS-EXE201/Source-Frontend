import classNames from 'classnames/bind';
import styles from './ChangePassword.module.scss';
import * as yup from 'yup';
import { axiosPublic } from '~/api/axiosInstance';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import config from '~/config';
import { useState } from 'react';
import { CHANGEPASSWORD } from '~/utils/apiContrants';
import ChangePasswordSnackbar from './ChangePasswordSnackbar';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    currentPassword: yup.string().required('Required'),
    email: yup
        .string()
        .required('Required')
        .matches(
            // eslint-disable-next-line no-useless-escape
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            'Please enter a valid email address',
        ),
    newPassword: yup
        .string()
        .required('Required')
        .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
            'Password must be 7-19 characters and contain at least one letter, one number and a special character',
        ),
    confirmPassword: yup
        .string()
        .required('Required')
        .oneOf([yup.ref('newPassword'), null], 'Password must match'),
});

const cx = classNames.bind(styles);
function ChangePassword() {
    const location = useLocation();
    const { email } = location.state;
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        criteriaMode: 'all',
        resolver: yupResolver(schema),
    });
    const onSubmit = async (values) => {
        const { currentPassword, newPassword } = values;
        console.log({ currentPassword, email, newPassword });
        try {
            const response = await axiosPublic.post(CHANGEPASSWORD, {
                currentPassword,
                email,
                newPassword,
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
    };

    return (
        <div className={cx('container')}>
            <div className={cx('text-wrapper-header')}>Tạo mật khẩu mới</div>
            <hr className={cx('horizontal-line')} />
            <div className={cx('text-wrapper-body')}>
                Bạn vui lòng kiểm tra email để nhận mã dể đổi mật khẩu mới nhé.
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className={cx('text-input-email')}
                    id="passwordCurrent"
                    name="passwordCurrent"
                    autoComplete="off"
                    placeholder="Mã được gửi qua email"
                    {...register('currentPassword', { required: true })}
                />
                {errors.currentPassword && <p className={cx('error')}>{errors.currentPassword.message}</p>}

                <input
                    className={`cx('text-input-email') ${errors.email && 'error'}`}
                    name="email"
                    id="email"
                    readOnly
                    value={email}
                    placeholder="Tên tài khoản"
                    {...register('email', { required: true })}
                />

                <input
                    autoComplete="off"
                    className={cx('text-input-email')}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Nhập lại mật khẩu mới"
                    {...register('newPassword', { required: true })}
                />
                {errors.newPassword && <p className={cx('error')}>{errors.newPassword.message}</p>}

                <input
                    className={cx('text-input-email')}
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Mật khẩu mới"
                    autoComplete="off"
                    {...register('confirmPassword', { required: true })}
                />
                {errors.confirmPassword && <p className={cx('error')}>{errors.confirmPassword.message}</p>}

                <div className={cx('buttons-container')}>
                    <div className={cx('button-cancel')}>
                        <div>Hủy</div>
                    </div>
                    <button
                        //  onClick={handleChangePassword}
                        className={cx('button-search')}
                        type="submit"
                        variant="contained"
                    >
                        <div>Đổi mật khẩu</div>
                    </button>
                </div>
            </form>
            <ChangePasswordSnackbar open={open} handleClose={handleClose} text={text} />
        </div>
    );
}

export default ChangePassword;
