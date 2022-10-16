export interface QuestionType{
    question: string,
    answers: Array<Answer>,
    id: number,
    img?: string,

}

export interface Answer {
    id: number,
    text: string,
    next: number,
}

export type QuestionList = Array<QuestionType>;

export interface UserAnswer {
    questionId: number,
    answer: Answer
}

export type UserAnswerList = Array<UserAnswer>;