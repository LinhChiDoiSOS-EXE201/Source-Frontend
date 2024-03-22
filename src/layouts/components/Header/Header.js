import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import config from '~/config';

const cx = classNames.bind(styles);
function Header() {
    const location = useLocation();
    const history = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(false);
    let checkLogin = null;
    console.log(checkLogin);

    const storedLoginInfo = localStorage.getItem('loginInfo');

    if (storedLoginInfo !== null || storedLoginInfo !== undefined) {
        const loginInfo = JSON.parse(storedLoginInfo);
        if (loginInfo !== null && loginInfo !== undefined) {
            const user = jwtDecode(loginInfo.accessToken);
            const isExpired = user.exp > Date.now() / 1000;

            console.log(isExpired);
            checkLogin = isExpired;
            console.log(checkLogin);
        }
    } else {
        checkLogin = false;
        history(config.routes.login);
    }

    // useEffect(() => {
    //     if (storedLoginInfo) {
    //         const loginInfo = JSON.parse(storedLoginInfo);
    //         const user = jwtDecode(loginInfo.accessToken);
    //         const isExpired = user.exp > Date.now() / 1000;
    //         console.log(isExpired);
    //         checkLogin = isExpired;
    //         console.log(checkLogin);

    //         if (isExpired) {
    //             setLoggedIn(true);
    //         } else {
    //             setLoggedIn(false);
    //             // Perform logout or token refresh logic here
    //         }
    //     } else {
    //         checkLogin = false;
    //         setLoggedIn(false);
    //     }
    // }, []);

    const handleLogout = () => {
        localStorage.removeItem('loginInfo');
        //setLoggedIn(false);
        history(config.routes.login);
    };

    return (
        <div className={cx('header')}>
            <div className={cx('overlap-group')}>
                <div className={cx('rectangle')}>
                    <Link to={config.routes.khancap} className={cx('logo-SOS')}>
                        <img className={cx('icon-button')} src={images.logo} alt="SOS" />
                    </Link>
                    <Link
                        to={config.routes.khancap}
                        className={cx('text-khan-cap', { active: location.pathname === config.routes.khancap })}
                    >
                        Khẩn cấp
                    </Link>
                    <Link
                        to={checkLogin === null || checkLogin === false ? config.routes.home : config.routes.chuandoan}
                        className={cx('text-chuan-doan', { active: location.pathname === config.routes.chuandoan })}
                    >
                        Chẩn đoán
                    </Link>
                    <Link
                        to={config.routes.kynang}
                        className={cx('text-ky-nang', { active: location.pathname === config.routes.kynang })}
                    >
                        Học kỹ năng
                    </Link>
                    <Link
                        to={checkLogin === null || checkLogin === false ? config.routes.home : config.routes.thuchanh}
                        className={cx('text-thuc-hanh', { active: location.pathname === config.routes.thuchanh })}
                    >
                        Thực hành
                    </Link>

                    {checkLogin === true ? (
                        <>
                            <Link
                                to={config.routes.profile}
                                className={cx('ellipse-user', { active: location.pathname === config.routes.profile })}
                            >
                                <img className={cx('user-icon')} src={images.user} alt="User" />
                            </Link>

                            <Link onClick={handleLogout} to={config.routes.login} className={cx('ellipse-search')}>
                                <img className={cx('search-icon')} src={images.logout} alt="Log out" />
                            </Link>
                        </>
                    ) : (
                        <Link to={config.routes.login} className={cx('ellipse-user')}>
                            <img className={cx('user-icon')} src={images.user} alt="User" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
