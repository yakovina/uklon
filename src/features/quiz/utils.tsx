import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import styles from './Quiz.module.css';

import {MAX_RATE} from './const';

import {
    Answer,
    QuestionList,
    QuestionType,
} from './types';


export const START_ID = 101;

const returnAnswerId = (ans: Answer, dayNumber: number)=>{
    if(dayNumber <6){
        return ans.next? parseInt(dayNumber.toString()+ans.next.toString()) : parseInt((dayNumber+1).toString()+ START_ID.toString())
    }
    else return ans.next? parseInt(dayNumber.toString()+ans.next.toString()) : 0;
}

export const getIdsByDay = (list: QuestionList, dayNumber: number) =>{
    return list.map(item=>{
        return {...item,
            id: parseInt(dayNumber.toString()+item.id.toString()),
            answers: item.answers.map(ans => {
                return {
                    ...ans,
                    next: returnAnswerId(ans, dayNumber),
                }
            })
        }
    });
}

export const createList = (arr: Array<QuestionList>) => {
    const list = arr.map((item, index) => getIdsByDay(item, index+1));
    let newList: Array<QuestionType> = [];
    list.forEach(item =>{
        newList = [...newList, ...item];
    })

    return newList

}

export function returnIcons(rate: number) {
    return  Array(MAX_RATE).fill(MAX_RATE).map((item, index) => rate && index>= rate ?
        <StarBorderIcon/>:
        <StarIcon className={styles.colorfull}/>)
}

export const loadImage = (url: string) => new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', (err) => reject(err));
    img.src = url;
});

