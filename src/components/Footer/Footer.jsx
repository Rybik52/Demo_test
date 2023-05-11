import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
        <div className="footer__container">
            <h2>Присоединяйтесь к нам и получите <span>скидку</span> до 50%</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            <div className="footer__container-input">
                <input type="search" placeholder='Введите email'/>
                <button>Войти</button>
            </div>
        </div>
    </footer>
  )
}
