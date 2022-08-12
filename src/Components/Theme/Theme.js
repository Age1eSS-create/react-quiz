import React , { useEffect } from "react"
import cn from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { ThemeReduser , ThemeState , ThemeAction } from "../../Store/Reducers/theme.reducer"
import styles from './Theme.module.scss'

const Theme = ({className}) => {
    const dispatch = useDispatch()
    const {theme} = useSelector(ThemeState)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
      }, [ theme ])

    const handleChange = () => {
        const next = theme === 'dark' ? 'light' : 'dark'
        console.log(ThemeReduser)
        dispatch(ThemeAction.set(next))
    }

    return (
        <div
          className={cn(
                className,
                styles.root,
                theme === 'dark' ? styles.dark : styles.light)}
          onClick={handleChange}
        />
      )
}

export default Theme