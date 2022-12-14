import {QuestionList} from '../../types';
import Img from '../../img/scenes/page_04.jpg'




export const Day1: QuestionList = [{
    id: 101,
    question: `<p>У п'ятницю ви вирішили попрацювати до ночі, аби дочекатися найвищого попиту перед комендантською годиною.</p>

<p>Маєте замовлення з центру (судячи з усього, це бар) прямо до району, де ви мешкаєте. Приймаєте?</p>`,
    img: Img,
    answers: [
        {
            id: 1,
            text: 'Так, ідеально!',
            next: 102,
        },
        {
            id: 2,
            text: 'Ні, не хочу втрапити в неприємності',
            next: 201,
        },
    ],
},
    {
        id: 201,
        question: `Мудре рішення. Але інших замовлень у вашому районі немає, а комендантська година за пів години. Все ж візьмемо?`,
        answers: [
            {
                id: 1,
                text: 'Так',
                next: 103,
            },
            {
                id: 2,
                text: 'Ні',
                next: 202,
            },
        ],
    },
    {
        id: 202,
        rate: -1,
        question: `Доведеться просто їхати додому «пустим», бо іншого підходящого пасажира ви не знайшли. На добраніч!`,
        answers: [
            {
                id: 1,
                text: 'Перейти до наступного дня',
                next: 0,
            },
        ],
    },
    {
        id: 102,
        question: `Щойно під'їхали, стає зрозуміло, що доведеться везти пасажира, який випив декілька міцних коктейлів. Везете?`,
        answers: [
            {
                id: 1,
                text: 'Так',
                next: 103,
            },
            {
                id: 2,
                text: 'Ні, скасовую',
                next: 203,
            },
        ],
    },
    {
        id: 203,
        rate: -1,
        question: `Доведеться їхати додому «пустим», бо іншого пасажира ви не знайшли. На добраніч!`,
        answers: [
            {
                id: 1,
                text: 'Перейти до наступного дня',
                next: 0,
            },
        ],
    },
    {
        id: 103,
        question: `Друзі допомагають пасажиру сісти в авто. Ви рушаєте. Дати чоловіку пакет про всяк випадок?`,
        answers: [
            {
                id: 1,
                text: 'Так, не хочу потім платити за хімчистку',
                next: 104,
            },
            {
                id: 2,
                text: 'Ні, не хочу про це думати',
                next: 204,
            },
        ],
    },
    {
        id: 204,
        question: `Це було хибне рішення, щойно ви зрушили з місця, пасажира знудило. Тепер ви можете надихнути його оплатити вам хімчистку. Що робити?`,
        answers: [
            {
                id: 1,
                text: 'Попрошу компенсувати хімчистку',
                next: 205,
            },
            {
                id: 2,
                text: 'Одразу зателефоную в службу підтримки Uklon і прошу компенсацію там',
                next: 206,
            },
            {
                id: 3,
                text: 'Попрошу його по можливості прибрати за собою, поки їдемо, і дам ганчірку',
                next: 207,
            },
        ],
    },
    {
        id: 205,
        question: `Пасажир починає чимось за собою витирати й перепрошувати. Пропонує оплатити хімчистку, але ви вже зробили запит у службу підтримки.`,
        answers: [
            {
                id: 1,
                text: 'Далі',
                next: 208,
            },
        ],
    },
    {
        id: 206,
        question: `<p>В службі обіцяють допомогти, але завтра, коли менеджер буде на місці і зможе оцінити ситуацію.</p>
<p>Пасажир тим часом починає чимось за собою витирати й перепрошувати.</p>`,
        answers: [
            {
                id: 1,
                text: 'Далі',
                next: 209,
            },
        ],
    },
    {
        id: 207,
        question: `Пасажир починає за собою витирати й перепрошувати. Пропонує оплатити хімчистку, але ви вже зробили запит у службу підтримки.`,
        answers: [
            {
                id: 1,
                text: 'Далі',
                next: 210,
            },
        ],
    },
    {
        id: 208,
        question: `Ви дісталися пункту призначення, прослідкували, аби пасажир зайшов у під'їзд, і поспішили додому, аби встигнути до комендантської години.`,
        answers: [
            {
                id: 1,
                text: 'Далі',
                next: 211,
            },
        ],
    },
    {
        id: 209,
        question: `Ви дісталися пункту призначення, прослідкували, аби пасажир зайшов у під'їзд, і поспішили додому, аби встигнути до комендантської години.`,
        answers: [
            {
                id: 1,
                text: 'Далі',
                next: 212,
            },
        ],
    },
    {
        id: 210,
        question: `Ви дісталися пункту призначення, прослідкували, аби пасажир зайшов у під'їзд, і поспішили додому, аби встигнути до комендантської години.`,
        answers: [
            {
                id: 1,
                text: 'Далі',
                next: 212,
            },
        ],
    },
    {
        id: 211,
        question: `Наступного ранку пасажир поставив вам 4 зірочки.`,
        rate: 4,
        answers: [
            {
                id: 1,
                text: 'Перейти до наступного дня',
                next: 0,
            },
        ],
    },
    {
        id: 212,
        question: `Наступного ранку пасажир поставив вам 5 зірочок і переказав 30 грн чайових.`,
        rate: 5,
        answers: [
            {
                id: 1,
                text: 'Перейти до наступного дня',
                next: 0,
            },
        ],
    },
    {
        id: 104,
        question: `Пасажир бере пакет й одразу використовує його за призначенням. Ви дякуєте небу, що вчасно зреагували й врятували свій салон. Зупиняєтесь біля найближчої урни й виносите все зайве. На запитання, чи можете їхати далі, пасажир відповідає, що так і перепрошує за незручності. Ви рушаєте.`,
        answers: [
            {
                id: 1,
                text: 'Далі',
                next: 105,
            },
        ],
    },
    {
        id: 105,
        question: `Пасажир одразу заснув і їхав тихо-тихо аж до пункту призначення. Та щойно ви прибули, на вас чекав новий виклик – розбудити його й відправити додому. Як ви це зробите?`,
        answers: [
            {
                id: 1,
                text: 'Легенько потрушу за плечі',
                next: 106,
            },
            {
                id: 2,
                text: 'Голосно повідомлю, що ми приїхали',
                next: 106,
            },
            {
                id: 3,
                text: 'Ввімкну музику',
                next: 106,
            },
        ],
    },
    {
        id: 106,
        question: `Це не допомогло, пасажир продовжує спати як маля. Комендантська година вже за 10 хвилин. Що далі?`,
        answers: [
            {
                id: 1,
                text: 'Знову голосно до нього звернусь',
                next: 107,
            },
            {
                id: 2,
                text: 'Посигналю, щоб його розбудив звук',
                next: 107,
            },
        ],
    },
    {
        id: 107,
        question: `Ура, це спрацювало! Пасажир вийшов з авто і ви навіть проконтролювали, аби він зайшов у під'їзд. У вас є лише 5 хвилин, аби опинитися вдома, проте ви дуже близько.`,
        answers: [
            {
                id: 1,
                text: 'Їду хутчіше',
                next: 108,
            },
        ],
    },
    {
        id: 108,
        question: `Наступного ранку пасажир поставив вам 5 зірочок і переказав 100 грн чайових.`,
        rate: 5,
        answers: [
            {
                id: 1,
                text: 'Перейти до наступного дня',
                next: 0,
            },
        ],
    },
    ];