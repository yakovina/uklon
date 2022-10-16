import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {Answer, UserAnswer} from './types';

interface QuizState {
    userAnswers: Array<UserAnswer>,
    questionIndex: number
}

const initialState: QuizState = {
    userAnswers: [],
    questionIndex: 101,
};


export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        nextQuestion: (state, action: PayloadAction<Answer>) => {
          state.questionIndex = action.payload.next;
        },

    },
});

export const { nextQuestion } = quizSlice.actions;

export const selectQuestionIndex = (state: RootState) => state.quiz.questionIndex;
export const selectUserAnswers = (state: RootState) => state.quiz.userAnswers;


export default quizSlice.reducer;