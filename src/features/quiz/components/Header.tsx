import StarIcon from '@mui/icons-material/Star';
import {
    Box,
    Modal,
} from '@mui/material';
import {
    useMemo,
    useState,
} from 'react';
import {useAppSelector} from '../../../app/hooks';
import {MAX_RATE} from '../const';
import styles from '../Quiz.module.css'
import Logo from '../img/logo.png';
import LogoHmarochos from '../img/hmarochos_logo_white.svg';
import {
    selectUserRates,
} from '../quizSlice';


export const Header = () => {
    const userRates = useAppSelector(selectUserRates);

    const amounOfVins = useMemo(()=>userRates.filter(item => item === MAX_RATE).length, [userRates])
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
        <button className={styles.logo} onClick={()=> setOpen(true)}>
            <img src={Logo} alt="UKLON" />
            <span>Партнерська<br/>публікація</span>
        </button>

        <a href="https://uklon.com.ua/" className={styles.logoHmarochos}>
            <img src={LogoHmarochos} alt="Hmarochos" />
        </a>
        {createModal()}

        <div className={`${styles.logo} ${styles.nowrap}`}>
            <span>Зібрано: <span  className={styles.colorfull}>{amounOfVins}</span> x 5</span><StarIcon className={styles.colorfull}/>
        </div>


    </div>
    </>
}