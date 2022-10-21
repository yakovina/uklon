import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {Answer, UserAnswer} from './types';
import {START_ID} from './utils';

interface QuizState {
    userAnswers: Array<UserAnswer>,
    questionIndex: number,
    characterId: number | null
}

const initialState: QuizState = {
    userAnswers: [],
    questionIndex: START_ID,
    characterId: null
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
        }

    },
});

export const { nextQuestion, setCharacter } = quizSlice.actions;

export const selectQuestionIndex = (state: RootState) => state.quiz.questionIndex;
export const selectUserAnswers = (state: RootState) => state.quiz.userAnswers;
export const selectCharacter = (state: RootState) => state.quiz.characterId;

export default quizSlice.reducer;