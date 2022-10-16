import {
    Container
} from '@mui/material';
import {
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
import { Loader } from './Loader';



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
            <CSSTransition in={inProp} timeout={1000} classNames="card">
                <div className={`${styles.question} card`}>
                    <Container maxWidth="md" >

                        <div className={styles.questionText} dangerouslySetInnerHTML={{ __html: item?.question || '' }}></div>

                        <ul className={styles.answerContainer} >
                            {item?.answers.map((answer) => {
                                return <li className={styles.answer} key={answer.id}>
                                    <button onClick={() => handleAnswerClick(answer)}>
                                        <svg className={styles.icon} width="76" height="24" viewBox="0 0 76 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M74.8982 3.81845C72.5455 1.4187 59.4157 4.84187 58.2965 7.11055C57.7066 8.30706 59.6409 11.3941 63.3498 14.982C66.5847 18.1094 69.7205 20.9948 71.6901 20.3596C73.6596 19.7244 77.2576 6.2182 74.8982 3.81845Z" fill="#1DE5AC" />
                                        </svg>
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

