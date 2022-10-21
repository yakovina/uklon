import {
    Container
} from '@mui/material';
import React, {
    useEffect,
    useMemo,
    useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {BeginList} from '../texts/begin';
import {IhorList} from '../texts/ihor';
import styles from '../Quiz.module.css'
import {
    nextQuestion,
    selectCharacter,
    selectQuestionIndex,
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
    loadImage,
    returnIcons,
} from '../utils';
import {Car} from './Car';
import {Header} from './Header';
import { Loader } from './Loader';
import AnsIcon from '../img/ansIcon.svg';
import Line from '../img/line.svg'
import {drivers} from '../const';






export const Question = () => {
    const dispatch = useAppDispatch();
    let navigate = useNavigate();

    const questionIndex = useAppSelector(selectQuestionIndex);
    const characterId = useAppSelector(selectCharacter);
    const [item, setItem] = useState<QuestionType | undefined>(undefined);
    const [inProp, setInProp] = useState<boolean>(false);
    const [bg, setBg] = useState('');
    const [loading, setLoading] = useState(true);

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
        if (item?.img && bg !== item?.img) {
            setBg(item?.img);
        }
     
    }, [questionIndex, questions, inProp, item, bg])

    useEffect(() => {
        setLoading(true);
        setInProp(false);

        loadImage(bg)
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
        else {
            navigate('result')
        }
    }


    const getQuestions = () => {
        return <div className={styles.questionContainer} style={{ backgroundImage: `url(${bg})` }}>
            <div className={styles.blur} style={{opacity: characterId?0:1 }} ></div>
            <Header />
            <CSSTransition in={inProp} timeout={1000} classNames="card">
                <div className={`${styles.question} card`}>
                    <Container maxWidth="md">
                        {item && item.rate ? (
                                <div className= {styles.stars}>
                                    {returnIcons(item.rate)}
                                </div>
                        ) : <Car/>}


                        <div  className = {styles.df}>
                            { characterId && <img src={avatar} alt="" className = {styles.avatar}/>}
                            <div className={styles.questionText} dangerouslySetInnerHTML={{ __html: item?.question || '' }}></div>
                        </div>

                        {item && item.rate && (
                            <div className={styles.rate}>
                                <img src={Line} alt="" className = {styles.line}/>
                            </div>
                        )}


                        <ul className={styles.answerContainer} >
                             {item?.answers.map((answer) => {
                                return <li className={`${styles.answer} ${answer?.characterImg && styles.characterWindow}`} key={answer.id}>
                                    <button onClick={() => handleAnswerClick(answer)} className={answer?.characterImg && styles.withImage}>
                                        <span  className = {styles.icon}>
                                         <img src={AnsIcon} alt="icon"/>
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

