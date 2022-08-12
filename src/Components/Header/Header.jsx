import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Theme from '../Theme/Theme';
import MyButton from '../UI/MyButton';


const Header = () => {
  const flagUser = false

  return (
    <div className='Header'>
        <div className='Header__container'>
            <Link to='/' className='Header__logo'>
              <img src="./Logo.svg" alt="" />
            </Link>
            <ul className='header__menu menu-header'>
              <li className='menu-header__item'><Link to='/quiz'>Проверь себя</Link></li>
              <li className='menu-header__item'><Link to='/'>Категории</Link></li>
            </ul>
            {flagUser ? 
              <div className='Header__profile profile-header'>
                  <p className='profile-header__name'>Name</p>
                  <div className='profile-header__image'>
                    {/* <img src="" alt="Фотография профиля" /> */}
                  </div>
              </div>  
              :
              <MyButton className='border-button' text='Login' style={{marginRight:'25px'}}/>
          }
            <Theme />
        </div>
    </div>
  );
}

export default Header;
