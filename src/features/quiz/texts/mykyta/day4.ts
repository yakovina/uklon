import {QuestionList} from '../../types';
import Img from '../../img/scenes/page_10.jpg'

export const Day4: QuestionList = [{
    id: 101,
    img: Img,
    question: `
    <p>Ви прийняли замовлення типу «Доставка» поряд з будівельним магазином. Приїхавши на точку, побачили пасажира з 4 мішками матеріалу для ремонту. Крім того, що ви б не хотіли вести сипучу суміш в легковому авто, за правилами Uklon, ви маєте право відмовити пасажиру з багажем понад 20 кг.
</p>
<p>Як вчините?</p>`,
    answers: [
        {
            id: 1,
            text: 'Пояснюю, що не можу везти багаж вагою понад 20 кг.',
            next: 201,
        },
        {
            id: 2,
            text: 'Вагаюсь кілька секунд.',
            next: 102,
        },
        {
            id: 3,
            text: 'Мовчки завантажую мішки в авто.',
            next: 301,
        },
    ],
},
    {
        id: 201,
        question: `Він обіцяє доплатити за перевищення ваги та незручності. Їдемо?`,
        answers: [
            {
                id: 1,
                text: 'Так',
                next: 202,
            },
            {
                id: 2,
                text: 'Ні',
                next: 203,
            },
        ],
    },
    {
        id: 202,
        question: `Пасажир щасливий. Ви швидко доїхали і допомогли йому вивантажити бетон. Отримуєте 5 зірок і 15 грн чайових на автомийку.`,
        rate: 5,
        answers: [
            {
                id: 1,
                text: 'Перейти до наступного дня >>',
                next: 0,
            },
        ],
    },
    {
        id: 203,
        question: `Замовлення скасовано, такий ваш вибір.`,
        answers: [
            {
                id: 1,
                text: 'Перейти до наступного дня >>',
                next: 0,
            },
        ],
    },
    {
        id: 102,
        question: `Пасажир пропонує доплатити за автомийку. Їдемо?`,
        answers: [
            {
                id: 1,
                text: 'Так',
                next: 202,
            },
            {
                id: 2,
                text: 'Ні, це було риторичне запитання',
                next: 203,
            },
        ],
    },
    {
        id: 301,
        question: `Пасажир щасливий і вам допомагає. Ви швидко доїхали і допомогли йому дістати вантаж.`,
        answers: [
            {
                id: 1,
                text: 'Далі >>',
                next: 302,
            },
        ],
    },
    {
        id: 302,
        question: `Отримуєте 5 зірок і 15 грн чайових — мабуть, на автомийку, адже тепер вона вам точно не завадить.`,
        rate: 5,
        answers: [
            {
                id: 1,
                text: 'Перейти до наступного дня >>',
                next: 0,
            },
        ],
    },
];
