import styles from '../Quiz.module.css'
import Logo from '../img/logo.png';
import LogoHmarochos from '../img/hmarochos_logo_white.svg';

export const Header = () => {

    return<>
    <div className={styles.header}>
        <a href="https://uklon.com.ua/" className={styles.logoHmarochos}>
            <img src={LogoHmarochos} alt="Hmarochos" />
        </a>

        <a href="https://uklon.com.ua/" className={styles.logo}>
        <img src={Logo} alt="UKLON" />
            <span>Партнерська<br/>публікація</span>
        </a>
    </div>
    </>
}