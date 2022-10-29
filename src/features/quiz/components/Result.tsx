import FastForwardIcon from '@mui/icons-material/FastForward';
import React, {
    useEffect,
    useMemo,
    useState,
} from 'react';
import {
    useAppDispatch,
    useAppSelector,
} from '../../../app/hooks';
import {
    MAX_RATE,
    RESULT_TEXTS,
} from '../const';
import styles from '../Quiz.module.css';
import {
    goToStart,
    selectCharacter,
    selectUserRates,
} from '../quizSlice';
import {
    load,
    returnIcons,
} from '../utils';
import {Header} from './Header';
import Bg from '../img/cover.jpg'
import { CSSTransition } from 'react-transition-group';
import {Loader} from './Loader';
import {drivers} from '../const';
import {

    FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share';


const location = window.location.href.replace(/[^/]*$/, '');


export const Result = ()=>{
    const dispatch = useAppDispatch();

    const userRates = useAppSelector(selectUserRates);
    const character = useAppSelector(selectCharacter);


    const resultIndex = useMemo(()=>{
        return userRates.filter(item => item === MAX_RATE).length;
    },[userRates])

    const [inProp, setInProp] = useState<boolean>(false);
    const [screen, setScreen] = useState(1);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setInProp(true);
    }, [])

    const onGameReload = () => {
        dispatch(goToStart());
    }



    const onNextReload = () => {
        setInProp((prev) => {
            return !prev
        })
        new Image().src = Bg;
        setLoading(true);
        setInProp(false);
        load(Bg, 1500)
            .then( ()=> {
                setLoading(false);
                setInProp(true);
                setScreen(2);
            }).catch(err => console.error(err));

        window.scrollTo(0, 0);
    }


    const createResult =(screen : number)=>{
        if( screen === 2)  {
            return <div className={`${styles.question} card` }>

            <div className={`${styles.df} ${styles.result}`}>
                { character && <img src={drivers[character -1]} alt=""  className = {styles.image}/>}
                <div className={styles.resultContainer}>
                <div>Ваші результати:</div>
                <div className={styles.resultStarts}>
                    {userRates.filter(item => item > 0).map(item => {
                        return <div>
                            {returnIcons(item)}
                        </div>
                    })
                    }
                </div>
                <div className={styles.resultText}
                     dangerouslySetInnerHTML={{__html: RESULT_TEXTS[resultIndex] || ''}}></div>

                </div>
            </div>


                <p>  Поділитися результатом: </p>

                <p className={styles.social}><FacebookShareButton url={`${location}index_${character}${resultIndex}.html`}>
                    <FacebookIcon size={40}/>
                </FacebookShareButton>
                    <TelegramShareButton url={`${location}index_${character}${resultIndex}.html`} color={'#1de5ac'}>
                        <TelegramIcon size={40}/>
                    </TelegramShareButton>
                    <TwitterShareButton url={`${location}index_${character}${resultIndex}.html`}>
                        <TwitterIcon size={40}/>
                    </TwitterShareButton>
                </p>
                <button onClick={() => onGameReload()} className={styles.button}>
                                        <span className={styles.icon}>
                                                <FastForwardIcon />
                                        </span>
                    <div dangerouslySetInnerHTML={{__html: 'Грати знову!' || ''}}></div>
                </button>
            </div>
        }
        if(screen===1){
            return <div className={`${styles.question} card`}>
            <div className={styles.result}>

                <div className={styles.resultText}>
                   <p>Як бачите, робота водія – непроста, але цікава й надзвичайно важлива для суспільства. </p>
                    <p>Працювати з Uklon може кожен, у кого є своя машина. Свій графік і навантаження обираєте ви, а отже самі впливаєте на суму заробітку.</p>

                    <p>Вам завжди по дорозі з <b>UKLON DRIVER</b>, який би шлях ви не обрали у житті!</p>

                <br/>
                    <br/>
                    <br/>
                </div>

                <button onClick={onNextReload} className={`${styles.button} ${styles.finish}`}>
                                        <span className={styles.icon}>
                                               <FastForwardIcon />
                                        </span>
                    <div dangerouslySetInnerHTML={{__html: 'До результатів!' || ''}}></div>
                </button>
            </div>
            </div>
        }
    }

    return <>
        <div className={styles.questionContainer} style={{ backgroundImage: `url(${Bg})` }}>
            <Header />

            <CSSTransition in={inProp} timeout={1000} classNames="card">
                {loading ?    <div className='card'><Loader /></div> : createResult(screen)}
            </CSSTransition>
        </div>
    </>
}