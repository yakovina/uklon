import styles from '../Quiz.module.css'
import Logo from '../img/logo.png';
import {Pidtrymka} from './Pidtrymka';

export const Header = () => {

    return<>
        <Pidtrymka />
    <div className={styles.header}>
        <a href="https://uklon.com.ua/" className={styles.logo}>
        <img src={Logo} alt="UKLON" />
        </a>
    </div>
    </>
}