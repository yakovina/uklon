import {useAppSelector} from '../../../app/hooks';
import {selectUserAnswers} from '../quizSlice';
import {UserAnswerList} from '../types';


export const Result = ()=>{

    const userAnswers: UserAnswerList = useAppSelector(selectUserAnswers);

    return <>
        {  userAnswers.map(item => <div key={item.questionId}>
                {item.answer.text}
            </div>)}
    </>
}