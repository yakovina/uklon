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
} from '../quizSlice';
import {MykytaList} from '../texts/mykyta';
import {
    Answer,
    QuestionList,
    QuestionType,
} from '../types';
import { CSSTransition } from 'react-transition-group';
import {Car} from './Car';
import {Header} from './Header';
import { Loader } from './Loader';
import AnsIcon from '../img/ansIcon.svg';
import Line from '../img/line.svg'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Character1 from '../img/ch1.png';
import Character2 from '../img/ch2.png';


const MAX_RATE = 5;


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

       if(characterId === 1) return Character1;
       if(characterId ===2) return Character2;
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

        new Image().src = bg;
        setTimeout(() => {
            setLoading(false);
            setInProp(true)
        }, 1500)

    }, [bg])


    const handleAnswerClick = (answer: Answer) => {
        setInProp((prev) => {
            return !prev
        })

        if(answer.character){
            dispatch(setCharacter(answer.id));
        }
        dispatch(nextQuestion(answer))
    }

    function returnIcons(rate: number) {
        return    Array(MAX_RATE).fill(MAX_RATE).map((item, index) => rate && index>= rate ?
            <StarBorderIcon/>:
            <StarIcon/>)
    }

    const getQuestions = () => {
        return <div className={styles.questionContainer} style={{ backgroundImage: `url(${bg})` }}>
            <Header />
            <CSSTransition in={inProp} timeout={1000} classNames="card">
                <div className={`${styles.question} card`}>
                    <Container maxWidth="md">
                        <Car/>
                        <div  className = {styles.df}>
                            { characterId && <img src={avatar} alt="" className = {styles.avatar}/>}
                            <div className={styles.questionText} dangerouslySetInnerHTML={{ __html: item?.question || '' }}></div>
                        </div>

                        {item && item.rate && (
                            <div className = {styles.rate}>
                                <div className= {styles.stars}>
                                    {returnIcons(item.rate)}
                                </div>

                                <img src={Line} alt="" className = {styles.line}/>

                                <div className={styles.rateText}>
                                    {item.rateText}
                                </div>
                            </div>
                        )}


                        <ul className={styles.answerContainer} >
                             {item?.answers.map((answer) => {
                                return <li className={styles.answer} key={answer.id}>
                                    <button onClick={() => handleAnswerClick(answer)} className={answer?.img && styles.withImage}>
                                        <span  className = {styles.icon}>
                                         <img src={AnsIcon} alt="icon"/>
                                        </span>
                                        {answer?.img && <img src={answer.img}  className = {styles.image} alt=""/>}
                                        <span>{answer.text}</span>
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

