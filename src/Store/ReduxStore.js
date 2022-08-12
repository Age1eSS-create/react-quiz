import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { QuestionReducer } from './Reducers/question.reducer'
import { ThemeReduser } from './Reducers/theme.reducer'

const rootReducer = combineReducers({
    QuestionReducer,
    ThemeReduser
})

export const store = configureStore({
    reducer:rootReducer,
})
