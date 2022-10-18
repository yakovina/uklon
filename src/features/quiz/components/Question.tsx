import {
    Container
} from '@mui/material';
import React, {
    useEffect,
    useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
    questionMock
} from '../mock';
import styles from '../Quiz.module.css'
import {
    nextQuestion,
    selectQuestionIndex,
} from '../quizSlice';
import {
    Answer,
    QuestionList,
    QuestionType,
} from '../types';
import { CSSTransition } from 'react-transition-group';
import {Header} from './Header';
import { Loader } from './Loader';
import AnsIcon from '../img/ansIcon.svg'



export const Question = () => {
    const dispatch = useAppDispatch();
    let navigate = useNavigate();

    const questionIndex = useAppSelector(selectQuestionIndex);
    const questions: QuestionList = questionMock;
    const [item, setItem] = useState<QuestionType | undefined>(undefined);
    const [inProp, setInProp] = useState<boolean>(false);
    const [bg, setBg] = useState('');
    const [loading, setLoading] = useState(true);

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
        dispatch(nextQuestion(answer))
    }

    const getQuestions = () => {
        return <div className={styles.questionContainer} style={{ backgroundImage: `url(${bg})` }}>
            <Header />
            <CSSTransition in={inProp} timeout={1000} classNames="card">
                <div className={`${styles.question} card`}>
                    <Container maxWidth="md" >

                        <div className={styles.questionText} dangerouslySetInnerHTML={{ __html: item?.question || '' }}></div>

                        <ul className={styles.answerContainer} >
                            {item?.answers.map((answer) => {
                                return <li className={styles.answer} key={answer.id}>
                                    <button onClick={() => handleAnswerClick(answer)}>
                                        <span  className = {styles.icon}>
                                         <img src={AnsIcon} alt="icon"/>
                                        </span>
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

