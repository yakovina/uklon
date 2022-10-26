import React from 'react';
import {useAppSelector} from '../../app/hooks';

import {Result} from './components/Result';
import {Question} from './components/Question';
import styles from './Quiz.module.css';
import {
    selectFinish,
} from './quizSlice';



export const Quiz: React.FC = ()=>{

    const isFinish = useAppSelector(selectFinish);

    return<div className={styles.quiz}>

        {!isFinish ? <Question /> : <Result />}


    </div>
}

