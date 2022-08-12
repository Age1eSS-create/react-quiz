import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { quizAPI } from '../../API/API'

export const slice = createSlice({
    name: 'QuestionReducer',
    initialState: {
        question: "Тестовый вопрос №1",
        answers: ['Ответ 1','Ответ 2','Ответ 3','Ответ 4'],
    },
    reducers: {
        setQuestion : (state , action) => {
           state.question = action.payload.question
           state.answers = action.payload.answers
        }
    }

})

export const QuestionReducer = slice.reducer
export const QuestionAction = slice.actions

export const QuestionState = (state) => state.QuestionReducer


