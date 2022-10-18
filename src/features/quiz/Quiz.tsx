import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import {Result} from './components/Result';
import {Question} from './components/Question';
import styles from './Quiz.module.css'

const location = window.location.href;

console.log(location);
const router = createBrowserRouter([
    {
        path: `${location}/`,
        element: <Question />,
        
    },
    {
        path: `${location}/result`,
        element: <Result />
    },
]);

export const Quiz: React.FC = ()=>{


    // return<div className={styles.quiz} style={{backgroundImage:`url(${back1})` }}>
    return<div className={styles.quiz}>
        <RouterProvider router={router} />
    </div>
}

