import React from "react";
import s from './index.module.scss'

const MyButton = ({className , text , ...props}) => {

    return(
        <button className={s[className]} {...props}>{text}</button>
    )
}

export default MyButton