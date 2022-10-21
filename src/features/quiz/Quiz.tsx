import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import {Result} from './components/Result';
import {Question} from './components/Question';
import styles from './Quiz.module.css'


const router = createBrowserRouter([
    {
        path: `/`,
        element: <Question />,
        
    },
    {
        path: `/result`,
        element: <Result />
    },
],{
    basename: window.location.pathname
});

export const Quiz: React.FC = ()=>{
    return<div className={styles.quiz}>
        <RouterProvider router={router}  />
    </div>
}

