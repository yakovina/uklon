import React, {
    useEffect,
    useMemo,
    useState,
} from 'react';
import {useNavigate} from 'react-router-dom';
import {
    useAppDispatch,
    useAppSelector,
} from '../../../app/hooks';
import {
    MAX_RATE,
    RESULT_TEXTS,
} from '../const';
import AnsIcon from '../img/ansIcon.svg';
import styles from '../Quiz.module.css';
import {
    goToStart,
    selectCharacter,
    selectUserRates,
} from '../quizSlice';
import {returnIcons} from '../utils';
import {Header} from './Header';
import Bg from '../img/cover.jpg'
import { CSSTransition } from 'react-transition-group';
import {Loader} from './Loader';
import {drivers} from '../const';


export const Result = ()=>{
    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    //
    const userRates = useAppSelector(selectUserRates);
    const character = useAppSelector(selectCharacter);

    const resultIndex = useMemo(()=>{
        return userRates.filter(item => item === MAX_RATE).length;
    },[userRates])

    const [inProp, setInProp] = useState<boolean>(false);
    const [screen, setScreen] = useState(1);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        new Image().src = Bg;
        setTimeout(() => {
            setLoading(false);
            setInProp(true)
        }, 1500)
    }, [])

    const onGameReload = () => {
        dispatch(goToStart());
        navigate('/')

    }



    const onNextReload = () => {
        setInProp((prev) => {
            return !prev
        })
        setScreen(2)
    }


    const createResult =(screen : number)=>{
        if( screen === 1)  {
            return <div className={`${styles.question} card` }>

            <div className={`${styles.df} ${styles.result}`}>
                { character && <img src={drivers[character -1]} alt=""  className = {styles.image}/>}
                <div className={styles.resultContainer}>
                <div>Ваші результати:</div>
                <div className={styles.resultStarts}>
                    {userRates.map(item => {
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
                <button onClick={onNextReload} className={styles.button}>
                                        <span className={styles.icon}>
                                         <img src={AnsIcon} alt="icon"/>
                                        </span>
                    <div dangerouslySetInnerHTML={{__html: 'Далі >>' || ''}}></div>
                </button>
            </div>
        }
        if(screen===2){
            return <div className={`${styles.question} card`}>
            <div className={styles.result}>

                <div className={styles.resultText}>
                   <p> Як бачите, робота водія — непроста, але цікава й надзвичайно важлива для суспільства. Працювати водієм може кожен, у кого є машина. Свій графік і навантаження обираєте ви, а отже самі впливаєте на суму заробітку.</p>

                <p> З Uklon вам завжди по дорозі, який би шлях ви не обирали у житті!</p>

                <p>  Поділитися результатом (кнопки соцмереж)</p>
                </div>

                <button onClick={() => onGameReload()} className={styles.button}>
                                        <span className={styles.icon}>
                                         <img src={AnsIcon} alt="icon"/>
                                        </span>
                    <div dangerouslySetInnerHTML={{__html: 'Грати знову' || ''}}></div>
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