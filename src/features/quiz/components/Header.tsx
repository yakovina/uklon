import {
    Box,
    Modal,
    Typography,
} from '@mui/material';
import {useState} from 'react';
import styles from '../Quiz.module.css'
import Logo from '../img/logo.png';
import LogoHmarochos from '../img/hmarochos_logo_white.svg';


const style = {

};

export const Header = () => {


    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false)
    }


    const createModal = () => {
        return <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.modal} >
                <img src={Logo} alt="UKLON" />
                <p id="parent-modal-description">
                    Це – спонсорський матеріал, вихід якого став можливим за фінансової підтримки партнера. Тема гри та текст розроблялися з урахуванням його побажань.
                </p>
                <button className={styles.button} onClick={()=>setOpen(false)}>
                    Ok
                </button>
            </Box>
        </Modal>
    }

    return<>
    <div className={styles.header}>
        <a href="https://uklon.com.ua/" className={styles.logoHmarochos}>
            <img src={LogoHmarochos} alt="Hmarochos" />
        </a>
        {createModal()}

        <button className={styles.logo} onClick={()=> setOpen(true)}>
        <img src={Logo} alt="UKLON" />
            <span>Партнерська<br/>публікація</span>
        </button>
    </div>
    </>
}