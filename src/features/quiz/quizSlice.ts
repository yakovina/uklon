import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {Answer, UserAnswer} from './types';
import {START_ID} from './utils';

interface QuizState {
    userRates: Array<number>,
    questionIndex: number,
    characterId: number | null
}

const initialState: QuizState = {
    questionIndex: START_ID,
    characterId: null,
    userRates: []
};


export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        nextQuestion: (state, action: PayloadAction<Answer>) => {
          state.questionIndex = action.payload.next;
        },
        setCharacter: (state, action: PayloadAction<number>) => {
            state.characterId = action.payload
        },
        setNewRate: (state, action: PayloadAction<number>) =>{
            state.userRates = [...state.userRates, action.payload]
        },
        goToStart: () =>({...initialState})

    },
});

export const { nextQuestion, setCharacter, setNewRate, goToStart} = quizSlice.actions;

export const selectQuestionIndex = (state: RootState) => state.quiz.questionIndex;
export const selectUserRates= (state: RootState) => state.quiz.userRates;
export const selectCharacter = (state: RootState) => state.quiz.characterId;

export default quizSlice.reducer;