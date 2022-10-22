import {QuestionList} from '../../types';
import Img from '../../img/scenes/page_06.jpg'

export const Day6: QuestionList = [{
    id: 101,
    img: Img,
    question: `Цього вечора маєте важливе побачення, тож попередньо вимили авто. Перед зустріччю вирішили ще кілька годин попрацювати. Обрали вигідне замовлення й забрали пасажира.`,
    answers: [
        {
            id: 1,
            text: 'Далі >>',
            next: 102,
        },
    ],
},
    {
        id: 102,
        question: `Проте місце пункту призначення видалося не зовсім зрозумілим. Уточнити, до чого саме потрібно довезти?`,
        answers: [
            {
                id: 1,
                text: 'Так, уточнюю',
                next: 103,
            },
            {
                id: 2,
                text: 'Ні, на місці розберемось',
                next: 201,
            },
        ],
    },
    {
        id: 103,
        question: `Пасажир й сам достеменно не знає локацію — його друзі скинули геолокацію в месенджер, а він поставив її в додатку Uklon. Приятелі чекають на нього.`,
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
        question: `Вам це видається підозрілим. Згадуєте, як одного разу навігатор хибно завіз вас до лісу. 
Розповісти цю історію?`,
        answers: [
            {
                id: 1,
                text: 'Ні',
                next: 106,
            },
            {
                id: 2,
                text: 'Так',
                next: 105,
            },
        ],
    },
    {
        id: 105,
        question: `Пасажир запевняє, що такого не повториться.`,
        answers: [
            {
                id: 1,
                text: 'Далі >>',
                next: 106,
            },
        ],
    },
    {
        id: 106,
        question: `<p>Ви доїжджаєте до пункту призначення, проте останні 300 метрів доведеться проїхати вкрай розбитою та брудною дорогою. </p>
<p>Вже за півтори години у вас побачення. Що робитимете?</p>`,
        answers: [
            {
                id: 1,
                text: 'Пропонуєте йому пакети на ноги, які ви тримаєте на випадок, якщо когось знудить. Це допоможе пройти цю ділянку, не забруднивши взуття.',
                next: 107,
            },
            {
                id: 2,
                text: 'Їхатиму дуже повільно, аби не заляпати машину',
                next: 108,
            },
        ],
    },
    {
        id: 107,
        question: `Пасажир розгублено бере пакети й виходить з авто. Ви отримуєте 4 зірки`,
        rate: 4,
        answers: [
            {
                id: 1,
                text: 'Перейти до результатів >>',
                next: 0,
            },
        ],
    },
    {
        id: 108,
        question: `Машина після цієї пригоди вже геть не в ідеальному стані, але пасажир вкрай вдячний. Ви отримуєте 5 зірок і 20 грн чайових.`,
        rate: 5,
        answers: [
            {
                id: 1,
                text: 'Перейти до результатів >>',
                next: 0,
            },
        ],
    },
    {
        id: 201,
        question: `<p>Ви доїжджаєте до пункту призначення, проте останні 300 метрів доведеться проїхати вкрай розбитою та брудною дорогою.</p>
<p>Вже за півтори години у вас побачення. Що робитимете?</p>`,
        answers: [
            {
                id: 1,
                text: 'Їхатиму дуже повільно, аби не заляпати машину',
                next: 108,
            },
            {
                id: 2,
                text: 'Запитаю, чи може пасажир далі піти сам і поясню що мені важливо, аби сьогодні авто було чисте.',
                next: 202,
            },
        ],
    },
    {
        id: 202,
        question: `Пасажир благає його підвезти, бо тротуару там немає й він у білих кросівках. Ви?`,
        answers: [
            {
                id: 1,
                text: 'Їхатиму дуже повільно, аби не заляпати машину',
                next: 108,
            },
            {
                id: 2,
                text: 'Пропонуєте йому пакети на ноги, які ви тримаєте на випадок, якщо когось нудить',
                next: 107,
            },
        ],
    },



];
