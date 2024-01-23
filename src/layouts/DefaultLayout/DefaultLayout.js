import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import Footer from '~/layouts/components/Footer';
import Login from '../../pages/Login/Login';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Login />
            {/* <div className={cx('content')}>{children}</div>
            <Footer /> */}
        </div>
    );
}

export default DefaultLayout;
