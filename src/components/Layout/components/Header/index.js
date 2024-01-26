import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import logo from '~/assets/images/logo.svg';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header>
            <nav className="nav container">
                <div className="leftSide">
                    <a href="#!">Khẩn cấp</a>
                    <a href="#!">Chuẩn đoán</a>
                </div>
                <div className="logoBox">
                    <img src={logo} alt="" />
                </div>
                <div className="rightSide">
                    <a href="#!">Học kỹ năng</a>
                    <a href="#!">Thực hành</a>
                </div>
            </nav>
            
        </header>
    );
}

export default Header;
