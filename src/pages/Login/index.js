import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import images from '~/assets/images';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import config from '~/config';
import { useFormik } from 'formik';
import { axiosPublic } from '~/api/axiosInstance';
import { LOGIN } from '~/utils/apiContrants';
import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import LoginSnackbar from './LoginSnackbar';

const cx = classNames.bind(styles);
function Login() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axiosPublic.post(LOGIN, {
                    email: values.email,
                    password: values.password,
                });

                const user = jwtDecode(response.data.accessToken);

                localStorage.setItem('loginInfo', JSON.stringify(response.data));

                if (user.role === 'EndUser') {
                    navigate(config.routes.home);
                } else if (user.role === 'Admin') {
                    navigate(config.routes.dashboard);
                } else if (user.role === 'Manager') {
                    navigate(config.routes.dashboard);
                } else if (user.role === 'Staff') {
                    navigate(config.routes.orderTracking);
                }
            } catch (error) {
                setText('Đăng nhập không thành công. Sai mật khẩu hoặc số điện thoại');
                setOpen(true);
            }
        },
    });
    return (
        <div className={cx('NG-NHP')}>
            <div className={cx('div-2')}>
                <p className={cx('text-wrapper-11')}>
                    Tài khoản SOS để lưu lại quá trình học và tra cứu khóa học hiện tại
                </p>
                <div className={cx('text-wrapper-12')}>ĐĂNG NHẬP TÀI KHOẢN</div>
                <div className={cx('group-3')}>
                    <div className={cx('group-4')}>
                        <div className={cx('overlap-group-wrapper')}>
                            {/*<button className={cx('div-wrapper')}>
                                <div className={cx('text-wrapper-13')}>Đăng nhập</div>
    </button>*/}
                            <Button
                                className={cx('div-wrapper')}
                                variant="contained"
                                fullWidth
                                type="submit"
                                sx={{ mt: 3, mb: 2 }}
                                disabled={formik.isSubmitting}
                                startIcon={formik.isSubmitting ? <CircularProgress size="0.9rem" /> : null}
                            >
                                {formik.isSubmitting ? 'Đang Đăng nhập' : 'Đăng nhập'}
                            </Button>
                        </div>
                        <div className={cx('overlap-wrapper')}>
                            <Paper className={cx('overlap')}>
                                <TextField
                                    className={cx('text-wrapper-14')}
                                    required
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    placeholder="Email hoặc số điện thoại"
                                    autoComplete="off"
                                    autoFocus
                                />
                            </Paper>
                        </div>
                        <div className={cx('group-5')}>
                            <div className={cx('overlap')}>
                                <TextField
                                    className={cx('text-wrapper-15')}
                                    required
                                    name="password"
                                    placeholder="Mật khẩu"
                                    type="password"
                                    id="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className={cx('text-wrapper-16')}>Quên mật khẩu?</div>
                        <p className={cx('text-wrapper-17')}>Hoặc đăng nhập miễn phí với</p>
                        <div className={cx('text-wrapper-18')}>Trung tâm trợ giúp</div>
                        <div className={cx('group-6')}>
                            <Link to={config.routes.register} className={cx('text-wrapper-19')}>
                                Đăng ký miễn phí
                            </Link>
                            <p className={cx('text-wrapper-20')}>Bạn chưa có tài khoản?</p>
                        </div>
                        <div className={cx('group-7')}>
                            <div className={cx('group-8')}>
                                <div className={cx('overlap-group-2')}>
                                    <div className={cx('text-wrapper-21')}>Facebook</div>
                                    <img className={cx('group-9')} alt="Group" src={images.logoFacebookBold} />
                                </div>
                            </div>
                            <div className={cx('group-10')}>
                                <div className={cx('overlap-group-2')}>
                                    <div className={cx('text-wrapper-22')}>Google</div>
                                    <img className={cx('vector-3')} alt="Vector" src={images.logoGoogle} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('group-11')}>
                        <img className={cx('logo-SOS-ver-mau')} alt="Logo SOS ver mau" src={images.logo} />
                        <p className={cx('text-wrapper-23')}>Sẵn sàng ứng phó, tự cứu chính mình</p>
                    </div>
                </div>
            </div>
            <LoginSnackbar open={open} handleClose={handleClose} text={text} />
        </div>
    );
}

export default Login;
