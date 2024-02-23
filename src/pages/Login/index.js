import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import images from '~/assets/images';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import config from '~/config';
import { useFormik } from 'formik';
import { axiosPublic } from '~/api/axiosInstance';
import { GETCUSTOMERBYEMAIL, LOGIN, REGISTER } from '~/utils/apiContrants';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, CircularProgress } from '@mui/material';
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

                //console.log(user.role);
                if (user.role === 'Customer') {
                    navigate(config.routes.profile);
                } else if (user.role === 'Manager') {
                    navigate(config.routes.profile);
                }
            } catch (error) {
                setText('Đăng nhập không thành công. Sai mật khẩu hoặc số điện thoại');
                setOpen(true);
            }
        },
    });

    const handleCallbackResponse = async (response) => {
        try {
            const userObject = jwtDecode(response.credential);
            // Kiểm tra xem người dùng đã tồn tại trong cơ sở dữ liệu chưa
            // Nếu chưa tồn tại, thêm người dùng mới vào cơ sở dữ liệu với thông tin từ Google
            // Sử dụng hàm kiểm tra tồn tại người dùng ở đây
            console.log(userObject);
            console.log(userObject.email);
            const userExists = await checkUserExists(userObject.email);
            console.log(userExists);
            if (!userExists) {
                console.log(userExists);
                // Nếu người dùng chưa tồn tại, thêm vào cơ sở dữ liệu
                await registerUser(userObject);
            }

            // Sau khi xác thực và đăng ký thành công, tiến hành đăng nhập người dùng vào hệ thống
            // Sử dụng hàm đăng nhập ở đây
            loginUser(response.credential);
        } catch (error) {
            console.error('Error:', error);
            setText('Đăng nhập không thành công');
            setOpen(true);
        }
    };

    const checkUserExists = async (email) => {
        // Thực hiện kiểm tra xem người dùng đã tồn tại trong cơ sở dữ liệu chưa
        // Trả về true nếu người dùng tồn tại, ngược lại trả về false
        // call api getCustomerByEmail
        try {
            const response = await axiosPublic.get(`${GETCUSTOMERBYEMAIL}/${email}`);
            console.log(response.data.customerData);
            if (response.data.customerData) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Error checking user existence:', error);
            throw new Error('Error checking user existence');
        }
    };
    const registerUser = async (user) => {
        try {
            const response = await axiosPublic.post(REGISTER, {
                phone: '',
                email: user.email,
                password: generateRandomPassword(12),
                userName: user.email,
                fullname: user.name,
            });

            console.log('User registered:', response.data);
            // Nếu muốn lưu trữ thông tin đăng nhập vào session hoặc lưu trữ tùy thuộc vào cách triển khai,
            // Thực hiện ở đây
        } catch (error) {
            console.error('Registration failed:', error);
            setText('Đăng ký không thành công');
            setOpen(true);
        }
    };

    function generateRandomPassword(length) {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    const loginUser = async (user) => {
        // Thực hiện đăng nhập người dùng vào hệ thống
        // Bạn có thể thực hiện bất kỳ logic đăng nhập nào ở đây, ví dụ lưu thông tin đăng nhập vào session
        // Sau khi đăng nhập thành công, chuyển hướng người dùng đến trang mong muốn, ví dụ trang profile
        localStorage.setItem('loginInfo', JSON.stringify(user));
        navigate(config.routes.profile);
    };

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
        <div className={cx('NG-NHP')}>
            <div className={cx('div-2')}>
                <p className={cx('text-wrapper-11')}>
                    Tài khoản SOS để lưu lại quá trình học và tra cứu khóa học hiện tại
                </p>
                <div className={cx('text-wrapper-12')}>ĐĂNG NHẬP TÀI KHOẢN</div>
                <div className={cx('group-3')}>
                    <div className={cx('group-4')}>
                        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                            <div className={cx('overlap-wrapper')}>
                                <TextField
                                    className={cx('overlap')}
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
                            </div>
                            <div className={cx('group-5')}>
                                <TextField
                                    className={cx('overlap')}
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
                            <div className={cx('overlap-group-wrapper')}>
                                {/*<button className={cx('div-wrapper')}>
                                <div className={cx('text-wrapper-13')}>Đăng nhập</div>
                            </button>*/}
                                <Button
                                    className={cx('div-wrapper')}
                                    variant="contained"
                                    type="submit"
                                    sx={{
                                        mt: 0,
                                        mb: 0,
                                        fontSize: '1.8rem',
                                        fontWeight: 900,
                                        textTransform: 'none',
                                        fontFamily: 'Darker Grotesque, Helvetica',
                                    }}
                                    disabled={formik.isSubmitting}
                                    startIcon={formik.isSubmitting ? <CircularProgress size="0.9rem" /> : null}
                                >
                                    {formik.isSubmitting ? 'Đang Đăng nhập' : 'Đăng nhập'}
                                </Button>
                            </div>
                            <Link to={config.routes.resetpassword} className={cx('text-wrapper-16')}>
                                Quên mật khẩu?
                            </Link>
                            <p className={cx('text-wrapper-17')}>Hoặc đăng nhập miễn phí với</p>
                            <div className={cx('text-wrapper-18')}>Trung tâm trợ giúp</div>
                            <div className={cx('group-6')}>
                                <Link to={config.routes.register} className={cx('text-wrapper-19')}>
                                    Đăng ký miễn phí
                                </Link>
                                <p className={cx('text-wrapper-20')}>Bạn chưa có tài khoản?</p>
                            </div>
                            <div className={cx('group-7')}>
                                <div className={cx('group-10')}>
                                    <div className={cx('overlap-group-2')}>
                                        <div className={cx('text-wrapper-22')}>Google</div>
                                        <div id="signInDiv" className={cx('text-wrapper-signInDiv')}></div>
                                    </div>
                                </div>
                            </div>
                        </Box>
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
