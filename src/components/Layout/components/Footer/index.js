import './Footer.scss';
import logoF from '~/assets/images/logo white copy 1.png';
import fb from '~/assets/images/fb.svg';
import ins from '~/assets/images/ins.svg';
import phone from '~/assets/images/phone.svg';
import mail from '~/assets/images/mail.svg';
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="boxContent">
                    <div className="row">
                        <img src={logoF} alt="" className="logoF" />
                        <p>Sẵn sàng ứng phó, tự cứu chính mình</p>
                    </div>
                    <div className="row">
                        <p>Liên hệ với chúng tôi</p>
                        <div className="socials">
                            <img src={fb} alt="" />
                            <img src={ins} alt="" />
                            <img src={phone} alt="" />
                            <img src={mail} alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <ul>
                            <li>Khẩn cấp</li>
                            <li>Tra cứu</li>
                            <li>Học kĩ năng</li>
                        </ul>
                    </div>
                    <div className="row">
                        <ul>
                            <li>Thực hành</li>
                            <li>Cá nhân</li>
                            <li>Về Khẩn cấp SOS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
