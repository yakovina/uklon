import {Day1} from './texts/ihor/day1';
import {Day2} from './texts/ihor/day2';
import {Day3} from './texts/ihor/day3';
import {Day4} from './texts/ihor/day4';
import {Day5} from './texts/ihor/day5';
import {Day6} from './texts/ihor/day6';
import {
    QuestionList,
    QuestionType,
} from './types';

export const START_ID = 101;

export const getIdsByDay = (list: QuestionList, dayNumber: number) =>{
    return list.map(item=>{
        return {...item,
            id: parseInt(dayNumber.toString()+item.id.toString()),
            answers: item.answers.map(ans => {
                return {
                    ...ans,
                    next: ans.next? parseInt(dayNumber.toString()+ans.next.toString()) : parseInt((dayNumber+1).toString()+ START_ID.toString()),
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