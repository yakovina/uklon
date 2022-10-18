import { QuestionList } from "./types";
import Bg1 from './img/bg.png';
import Bg2 from './img/bg.png';

export const questionMock: QuestionList = [{
    id: 101,
    question: `
    <p>Ви обожнюєте грати в футбол, щовівторка з друзями орендуєте поле. Проте цього разу ви попередили, що хочете попрацювати, бо скоро у сина день народження і ви збираєте йому на новий дорогий велосипед. Та пропозиція із футболом дуже приваблива, адже і погода гарна, і футбольна форма у вас із собою в багажнику.
    </p>
    
    <p>Що робити?</p>
    `,
    img: Bg1,
    answers: [
        {
            id: 1,
            text: 'Їду на футбол. Не хочу підвести друзів',
            next: 201,
        },
        {
            id: 2,
            text: 'Залишаюсь працювати. Не можу підвести сина',
            next: 102,
        }
    ],
},
{
    id: 102,
    question: `Ви отримуєте вкрай вигідне замовлення на відстань 2 км в центрі за 170 грн. Приймаєте його?`,
    img: Bg2,
    answers: [
        {
            id: 1,
            text: 'Ні, хочу ще вигідніше',
            next: 202,
        },
        {
            id: 2,
            text: 'Так',
            next: 103,
        }
    ],
},
{
    id: 201,
    question: `Можливо це й на краще, бо на вас цього вечора чекали би чималі виклики! Проте і 5 зірок ви сьогодні точно не отримаєте, тому не прогавте свій шанс завтра!`,
    answers: [
        {
            id: 1,
            text: 'Повертаюсь до роботи наступного дня',
            next: 0,
        },
    ],
},
{
    id: 103,
    question: `Чудово! Ви під'їжджаєте до точки посадки й розумієте, що її поставлено рівно біля наземного переходу, з обох боків якого усе вщент запарковано. Ви вмощуєте авто на аварійці трохи далі переходу й натискаєте "Авто на місці". З усіх боків вам сигналять інші водії, бо ви сильно заважаєте руху. Зателефонувати пасажиру, аби попередити, що тут ви не зможете довго чекати?`,
    answers: [
        {
            id: 1,
            text: 'Так',
            next: 202,
        },
        {
            id: 2,
            text: 'Ні, просто зачекаю',
            next: 103,
        }
    ],
},
{
    id: 202,
    question: `Можливо це й на краще, бо на вас чекали би чималі виклики із цим замовленням! Проте і 5 зірок ви цього разу точно не отримаєте, тому не прогавте свій шанс наступного разу!`,
    answers: [
        {
            id: 1,
            text: 'Працюю далі',
            next: 0,
        },
    ],
},

];

