import React from 'react';
import { useState } from 'react';
import './Header.css';
import ProfileIco from '../../assets/Profile.svg';

export default function Header() {
  const [burger, setBurger] = useState(false);

  return (
    <header>
        <div className="header__logo">
            <a href="/">Еда в дом</a>
        </div>
        <nav>
            <ul className='header__items'>
                <a href='/'><li className="header__items-link">Главная</li></a>
                <a href='/'><li className="header__items-link">Каталог</li></a>
                <a href='/'><li className="header__items-link">Новые продукты</li></a>
                <a href='/'><li className="header__items-link">О нас</li></a>
                <a href='/'><li className="header__items-link">Контакты</li></a>
            </ul>
        </nav>
        <div className="header__profile">
            <a href="/"><img src={ProfileIco} alt="Профиль" /></a>
        </div>
        <div className="header__burger" onClick={setBurger(burger) => !burger}>
              <span class="header__burger-line"></span>
              <span class="header__burger-line"></span>
              <span class="header__burger-line"></span>
        </div>
    </header>
  )
}
