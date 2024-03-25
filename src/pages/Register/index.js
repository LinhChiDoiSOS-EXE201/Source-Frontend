import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import images from '~/assets/images';
import { Link, useNavigate } from 'react-router-dom';
import config from '~/config';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { axiosPublic } from '~/api/axiosInstance';
import { REGISTER } from '~/utils/apiContrants';
import { toast } from 'react-toastify';
import RegisterSnackbar from './RegisterSnackbar';
import jwtDecode from 'jwt-decode';

const cx = classNames.bind(styles);
function Register() {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const handleClose = () => {
        setOpen(false);
    };
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            userName: '',
            fullname: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required('Required').min(1, "Can't empty"),
            userName: Yup.string().required('Required').min(1, "Can't empty"),
            phone: Yup.string()
                .required('Required')
                .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Must be a valid phone number'),
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
                    'Password must be 7-10 characters and contain at least one capital letter, one number and a special character',
                ),
            confirmPassword: Yup.string()
                .required('Required')
                .required('Required')
                .oneOf([Yup.ref('password'), null], 'Password must match'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axiosPublic.post(REGISTER, {
                    phone: values.phone,
                    email: values.email,
                    password: values.password,
                    userName: values.userName,
                    fullname: values.fullname,
                });
                if (response.status === 200) {
                    toast.success(response.data.message);
                    navigate(config.routes.login);
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

    function handleCallbackResponse(response) {
        console.log('Id Token: ' + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
    }

    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: '116293461322-c1in4rounefu5vpva1rv3f8o0jkplsvd.apps.googleusercontent.com',
            callback: handleCallbackResponse,
        });

        window.google.accounts.id.renderButton(document.getElementById('signInDiv'), {
            theme: 'outline',
            size: 'large',
        });

        window.google.accounts.id.prompt();
    }, []);
    return (
        <div className={cx('NG-k')}>
            <div className={cx('div-2')}>
                <p className={cx('text-wrapper-11')}>
                    Tài khoản SOS để lưu lại quá trình học và tra cứu khóa học hiện tại
                </p>
                <div className={cx('text-wrapper-12')}>ĐĂNG KÝ TÀI KHOẢN</div>
                <div className={cx('group-3')}>
                    <div className={cx('group-4')}>
                        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                            <div className={cx('overlap-group-wrapper')}>
                                <Button className={cx('div-wrapper')} type="submit" variant="contained">
                                    Đăng ký
                                    {/*<div className={cx('text-wrapper-13')}>Đăng ký</div>*/}
                                </Button>
                            </div>
                            <div className={cx('group-5')}>
                                <div className={cx('group-6')}>
                                    {/*<div className={cx('text-wrapper-14')}>Tên của bạn</div>*/}
                                    <TextField
                                        className={cx('overlap-group-2')}
                                        required
                                        id="fullname"
                                        name="fullname"
                                        value={formik.values.fullname}
                                        onChange={formik.handleChange}
                                        placeholder="Tên của bạn"
                                        error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                                        helperText={formik.touched.fullname && formik.errors.fullname}
                                        autoComplete="off"
                                        autoFocus
                                    />
                                </div>
                                <div className={cx('overlap-wrapper')}>
                                    <TextField
                                        className={cx('overlap')}
                                        required
                                        id="phone"
                                        name="phone"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        placeholder="Số điện thoại"
                                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                                        helperText={formik.touched.phone && formik.errors.phone}
                                        autoComplete="off"
                                        autoFocus
                                    />
                                    {/*<div className={cx('text-wrapper-15')}>Số điện thoại</div>*/}
                                </div>
                            </div>
                            <div className={cx('group-7')}>
                                <TextField
                                    className={cx('overlap-2')}
                                    required
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    placeholder="Email"
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    autoComplete="off"
                                    autoFocus
                                />
                                {/*<p className={cx('text-wrapper-16')}>Tài khoản đăng nhập (Email hoặc số điện thoại)</p>*/}
                            </div>
                            <div className={cx('group-username')}>
                                <TextField
                                    className={cx('overlap-2')}
                                    required
                                    id="userName"
                                    name="userName"
                                    value={formik.values.userName}
                                    onChange={formik.handleChange}
                                    placeholder="Username"
                                    error={formik.touched.userName && Boolean(formik.errors.userName)}
                                    helperText={formik.touched.userName && formik.errors.userName}
                                    autoComplete="off"
                                />
                                {/*<p className={cx('text-wrapper-16')}>Additional Field</p>*/}
                            </div>
                            <div className={cx('group-8')}>
                                <TextField
                                    className={cx('overlap-2')}
                                    required
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    placeholder="Mật khẩu"
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    type="password"
                                    id="password"
                                    autoComplete="off"
                                />
                                {/*<div className={cx('text-wrapper-17')}>Mật khẩu</div>*/}
                            </div>
                            <div className={cx('group-9')}>
                                <TextField
                                    className={cx('overlap-2')}
                                    required
                                    name="confirmPassword"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    placeholder="Nhập lại mật khẩu"
                                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="off"
                                />
                                {/*<div className={cx('text-wrapper-17')}>Nhập lại mật khẩu</div>*/}
                            </div>
                            <p className={cx('text-wrapper-18')}>Đăng ký miễn phí với</p>
                            <div className={cx('text-wrapper-19')}>Hoặc</div>
                            <Link to={config.routes.login} className={cx('text-wrapper-20')}>
                                Đăng nhập
                            </Link>
                            <div className={cx('group-10')}>
                                <div className={cx('group-13')}>
                                    <div className={cx('overlap-group-3')}>
                                        <div id="signInDiv" className={cx('text-wrapper-signInDiv')}></div>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </div>
                    <div className={cx('group-wrapper')}>
                        <div className={cx('group-14')}>
                            <img className={cx('logo-SOS-ver-mau')} alt="Logo SOS ver mau" src={images.logo} />
                            <p className={cx('text-wrapper-23')}>Sẵn sàng ứng phó, tự cứu chính mình</p>
                        </div>
                    </div>
                </div>
            </div>
            <RegisterSnackbar open={open} handleClose={handleClose} text={text} />
        </div>
    );
}

export default Register;
