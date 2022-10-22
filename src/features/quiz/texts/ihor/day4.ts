import {QuestionList} from '../../types';
import Img from '../../img/scenes/page_08.jpg'

export const Day4: QuestionList = [{
    id: 101,
    img: Img,
    question: `Цього разу, прибувши на точку ви побачили пасажира із величезною валізою. Їхати потрібно на вокзал. Якби це була жінка, одразу допомогли, але перед вами доволі міцний чоловік. Що робитимете?`,
    answers: [
        {
            id: 1,
            text: 'Виходжу, аби допомогти відкрити багажник, але валізу не чіпаю.',
            next: 201,
        },
        {
            id: 2,
            text: 'Сам покладу валізу у багажник.',
            next: 102,
        },
    ],
},
    {
        id: 201,
        question: `Пасажир стоїть в очікуванні. Судячи з усього, він пропонує вам взятися за валізу. Допоможете?`,
        answers: [
            {
                id: 1,
                text: 'Так, сам кладу валізу в багажник.',
                next: 202,
            },
            {
                id: 2,
                text: 'Запитаю, чи потрібна допомога?',
                next: 203,
            },
        ],
    },
    {
        id: 202,
        question: `Не подякувавши, пасажир сідає в авто. Ви рушаєте. Про що запитаєте дорогою?`,
        answers: [
            {
                id: 1,
                text: 'Ви звідки чи куди?',
                next: 204,
            },
            {
                id: 2,
                text: 'Спізнюємось чи встигаємо?',
                next: 205,
            },
        ],
    },
    {
        id: 203,
        question: `Пасажир відповідає «Так, дякую», залишає валізу біля багажника, а сам сідає в машину. Ви рушаєте. Про що запитаєте дорогою?`,
        answers: [
            {
                id: 1,
                text: 'Ви звідки чи куди?',
                next: 204,
            },
            {
                id: 2,
                text: 'Спізнюємось чи встигаємо?',
                next: 205,
            },
        ],
    },
    {
        id: 204,
        question: `«Я би хотів помовчати», — відповідає пасажир.`,
        answers: [
            {
                id: 1,
                text: 'Далі >>',
                next: 206,
            },
        ],
    },
    {
        id: 205,
        question: `«Встигаємо», — коротко відповідає пасажир.`,
        answers: [
            {
                id: 1,
                text: 'Далі >>',
                next: 206,
            },
        ],
    },
    {
        id: 206,
        question: `Розповісти пасажиру анекдот, який ви прочитали вчора ввечері?`,
        answers: [
            {
                id: 1,
                text: 'Так',
                next: 207,
            },
            {
                id: 1,
                text: 'Ні',
                next: 208,
            },
        ],
    },
    {
        id: 207,
        question: `Пасажир знизує плечами й нічого не відповідає.  Розмова не склалася, але ви швидко доїхали. Знову допомогли йому з валізою і попрощалися.`,
        answers: [
            {
                id: 1,
                text: 'Далі >>',
                next: 209,
            },
        ],
    },
    {
        id: 209,
        question: `Ви отримуєте 4 зірки від пасажира. Мабуть, не сподобався анекдот.`,
        rate: 4,
        answers: [
            {
                id: 1,
                text: 'Працюю далі >>',
                next: 0,
            },
        ],
    },
    {
        id: 208,
        question: `Розмова не склалася, але ви швидко доїхали. Знову допомогли йому з валізою і попрощалися. Ви отримуєте 5 зірок від пасажира.`,
        rate: 5,
        answers: [
            {
                id: 1,
                text: 'Працюю далі >>',
                next: 0,
            },
        ],
    },
    {
        id: 102,
        question: `Пасажир, не подякувавши, сідає в авто. Ви рушаєте. Про що запитаєте дорогою?`,
        answers: [
            {
                id: 1,
                text: 'Ви звідки чи куди?',
                next: 103,
            },
            {
                id: 2,
                text: 'Спізнюємось чи встигаємо?',
                next: 210,
            },
        ],
    },
    {
        id: 103,
        question: `«Я би хотів помовчати», — відповідає пасажир.`,
        answers: [
            {
                id: 1,
                text: 'Далі >>',
                next: 104,
            },
        ],
    },
    {
        id: 210,
        question: `«Встигаємо», — коротко відповідає пасажир.`,
        answers: [
            {
                id: 1,
                text: 'Далі >>',
                next: 104,
            },
        ],
    },
    {
        id: 104,
        question: `Розповісти пасажиру анекдот, який ви прочитали вчора ввечері?`,
        answers: [
            {
                id: 1,
                text: 'Так',
                next: 105,
            },
            {
                id: 1,
                text: 'Ні',
                next: 211,
            },
        ],
    },
    {
        id: 105,
        question: `Пасажир знизує плечами й нічого не відповідає.`,
        answers: [
            {
                id: 1,
                text: 'Далі >>',
                next: 211,
            },
        ],
    },
    {
        id: 211,
        question: `Розмова не склалася, але ви швидко доїхали. Пасажир підійшов до багажника і знову чекає. Допоможете?`,
        answers: [
            {
                id: 1,
                text: 'Ні',
                next: 212,
            },
            {
                id: 1,
                text: 'Так',
                next: 213,
            },
        ],
    },
    {
        id: 212,
        question: `Дещо невдоволено пасажир дістає свою валізу. Гепнувши багажником, йде до будівлі вокзалу. Ви отримуєте 3 зірки.`,
        rate: 3,
        answers: [
            {
                id: 1,
                text: 'Працюю далі >>',
                next: 0,
            },
        ],
    },
    {
        id: 213,
        question: `Пасажир швидко дякує і йде до будівлі вокзалу. Ви отримуєте 5 зірок і 20 грн чайових. Мабуть, йому стало соромно.`,
        rate: 5,
        answers: [
            {
                id: 1,
                text: 'Працюю далі >>',
                next: 0,
            },
        ],
    },

];
