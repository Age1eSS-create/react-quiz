import { createSlice } from "@reduxjs/toolkit";

const getTheme = () => {
    const theme = `${window?.localStorage.getItem('theme')}`
    if (['dark' , 'light'].includes(theme)) return theme

    const userMedia = window.matchMedia('(prefers-color-scheme: light)')
    if (userMedia.matches) return 'light'
    return 'dark'
}

const initialState = getTheme()

export const slice = createSlice({
    name: 'ThemeReduser',
    initialState : {
        theme : initialState 
    },
    reducers: {
        set: (state , action) => {
            state.theme = action.payload
        }
    }
})

export const ThemeReduser = slice.reducer
export const ThemeAction = slice.actions

export const ThemeState = (state) => state.ThemeReduser