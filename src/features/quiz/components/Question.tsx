import {
    Container
} from '@mui/material';
import React, {
    useEffect,
    useMemo,
    useState,
} from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {BeginList} from '../texts/begin';
import {IhorList} from '../texts/ihor';
import styles from '../Quiz.module.css'
import {
    goToResult,
    nextQuestion,
    selectCharacter,
    selectQuestionIndex,
    selectUserRates,
    setCharacter,
    setNewRate,
} from '../quizSlice';
import {MykytaList} from '../texts/mykyta';
import {
    Answer,
    QuestionList,
    QuestionType,
} from '../types';
import { CSSTransition } from 'react-transition-group';
import {
    load,
    returnIcons,
} from '../utils';
import {Car} from './Car';
import {Header} from './Header';
import { Loader } from './Loader';
import {
    drivers,
    MAX_RATE,
} from '../const';
import FastForwardIcon from '@mui/icons-material/FastForward';
import StarIcon from '@mui/icons-material/Star';




export const Question = () => {
    const dispatch = useAppDispatch();

    const questionIndex = useAppSelector(selectQuestionIndex);
    const characterId = useAppSelector(selectCharacter);
    const userRates = useAppSelector(selectUserRates);
    const [item, setItem] = useState<QuestionType | undefined>(undefined);
    const [inProp, setInProp] = useState<boolean>(false);
    const [bg, setBg] = useState('');
    const [loading, setLoading] = useState(true);

    const amounOfVins = useMemo(()=>userRates.filter(item => item === MAX_RATE).length, [userRates])

    const avatar = useMemo(()=>{
       if(!characterId) return;

       return drivers[characterId -1];
    }, [characterId]);

    const questions: QuestionList = useMemo(()=>{
        if(!characterId) return BeginList;

        if(characterId === 1) return [...BeginList, ...MykytaList];
        if(characterId === 2) return [...BeginList, ...IhorList];

        return BeginList
    }, [characterId]);

    useEffect(() => {
        const itemFound = questions.find(q => q.id === questionIndex);
        if (!itemFound) return;

        setItem(itemFound);

        if(!itemFound || itemFound?.id < 103){
            dispatch(setCharacter(null));
        }

        window.scrollTo(0, 0);
        if (item?.img && bg !== item?.img) {
            setBg(item?.img);
        }
     
    }, [dispatch, questionIndex, questions, inProp, item, bg])

    useEffect(() => {
        setLoading(true);
        setInProp(false);

        load(bg, 1500)
            .then( ()=> {
                setLoading(false);
                setInProp(true)
            }).catch(err => console.error(err));

    }, [bg])


    const handleAnswerClick = (answer: Answer) => {
        setInProp((prev) => {
            return !prev
        })
        if(item?.rate) {
            dispatch(setNewRate(item.rate))
        }

        if(answer.characterImg){
            dispatch(setCharacter(answer.id));
        }

        if(answer.next){
            dispatch(nextQuestion(answer))
        }
        else{
            dispatch(goToResult());
        }
    }


    const getQuestions = () => {
        return <div className={styles.questionContainer} style={{ backgroundImage: `url(${bg})` }}>
            <div className={styles.blur} style={{opacity: characterId?0:1 }} ></div>
            <Header />
            <CSSTransition in={inProp} timeout={1000} classNames="card">
                <div className={`${styles.question} card`}>
                    <Container maxWidth="md">
                        {item && item.rate && item.rate > 0 && (
                                <div className= {styles.stars}>
                                    {returnIcons(item.rate)}
                                </div>
                        ) }


                            <div className = {styles.df}>
                                {item && (item.id === 101 || item.id ===  301) &&  <Car/> }
                                {item && item.id >= 1000 &&    <div className={`${styles.logo} ${styles.nowrap}`} style={{
                                    backgroundColor: 'transparent',
                                    backdropFilter: 'none'
                                }}>
                                    <span>Зібрано: <span
                                        className={styles.colorfull}>{amounOfVins}</span> x 5</span><StarIcon
                                    className={styles.colorfull}/>
                                </div>
                                }
                            </div>


                        <div  className = {styles.df}>
                            { characterId && <img src={avatar} alt="" className = {styles.avatar}/>}
                            <div className={styles.questionText} dangerouslySetInnerHTML={{ __html: item?.question || '' }}></div>
                        </div>


                        <ul className={styles.answerContainer} >
                             {item?.answers.map((answer) => {
                                return <li className={`${styles.answer} ${answer?.characterImg && styles.characterWindow}`} key={answer.id}>
                                    <button onClick={() => handleAnswerClick(answer)} className={`${answer?.characterImg && styles.withImage} ${item.rate && styles.finish}`}>
                                        <span  className = {styles.icon}>
                                            <FastForwardIcon />

                                        </span>
                                        {answer?.characterImg && <img src={answer.characterImg}  className = {styles.image} alt=""/>}
                                        <div dangerouslySetInnerHTML={{ __html: answer.text|| '' }}></div>
                                    </button>
                                </li>
                            })}
                        </ul>

                    </Container>
                </div>

            </CSSTransition>
        </div>
    }

    return <>
        <CSSTransition in={!loading} timeout={1000} classNames="card">
            <div className='card'>
                {loading ? <Loader /> : getQuestions()}
            </div>

        </CSSTransition>
    </>




}

