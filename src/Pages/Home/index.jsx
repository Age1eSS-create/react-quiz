import React from "react";
import { Link } from "react-router-dom";
import './index.scss'
import MyButton from "../../Components/UI/MyButton";

const Home = () => {
    return(
        <div className='Home'>
            <div className='Home__container'>
                <div className="info">
                    <h1 className="info__title">Учись, Играй и Отдыхай</h1>
                    <p className="info__subtitle">Мы поможем тебе узнавать новое каждый день</p>
                    <div className="info__buttons">
                        <MyButton className='blue-button' text='Проверить себя'/>
                        <div className="info__link">
                            <Link to='/'>категории</Link>
                            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.00117 9C5.74588 8.99871 5.49407 8.94061 5.26403 8.82991C5.03398 8.71922 4.83147 8.5587 4.67117 8.36L0.461168 3.26C0.215162 2.95297 0.0603538 2.583 0.0143849 2.19227C-0.031584 1.80153 0.0331352 1.40574 0.201168 1.05C0.337447 0.740826 0.559841 0.477413 0.841787 0.291223C1.12373 0.105032 1.45331 0.00393305 1.79117 0H10.2112C10.549 0.00393305 10.8786 0.105032 11.1606 0.291223C11.4425 0.477413 11.6649 0.740826 11.8012 1.05C11.9692 1.40574 12.0339 1.80153 11.988 2.19227C11.942 2.583 11.7872 2.95297 11.5412 3.26L7.33117 8.36C7.17087 8.5587 6.96835 8.71922 6.73831 8.82991C6.50826 8.94061 6.25646 8.99871 6.00117 9Z" fill="#2E80FF"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="images">
                    <img src="./main-img.png" alt="Основная картинка" />
                </div>
            </div>
        </div>
    )
}

export default Home